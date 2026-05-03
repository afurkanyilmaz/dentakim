"use client";

import { useEffect, useMemo, useState } from "react";
import { CLINIC, SERVICES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WHATSAPP_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AppointmentForm({
  defaultServiceSlug,
}: {
  defaultServiceSlug?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [lastPayload, setLastPayload] = useState<{
    name: string;
    phone: string;
    email: string;
    service: string;
    date: string;
    message: string;
  } | null>(null);
  const [lastId, setLastId] = useState<string | null>(null);
  const [service, setService] = useState(defaultServiceSlug ?? "");
  useEffect(() => {
    setService(defaultServiceSlug ?? "");
  }, [defaultServiceSlug]);
  const serviceOptions = useMemo(
    () => SERVICES.map((s) => ({ value: s.slug, label: s.title })),
    []
  );

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service: service,
      date: String(fd.get("date") || ""),
      message: String(fd.get("message") || ""),
    };
    const digits = payload.phone.replace(/\D/g, "");
    const normalized =
      digits.startsWith("90") && digits.length >= 12
        ? digits.slice(2)
        : digits.startsWith("0")
          ? digits.slice(1)
          : digits;
    if (
      !payload.name.trim() ||
      !payload.email.trim() ||
      !payload.service.trim() ||
      !payload.message.trim()
    ) {
      setStatus("error");
      return;
    }
    if (!/^[5-9]\d{9}$/.test(normalized)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("fail");
      const data = (await res.json()) as { ok: boolean; id?: string };
      setLastPayload(payload);
      setLastId(data.id ?? null);
      // After a successful submit, automatically open WhatsApp with a prefilled message.
      // Use same-tab navigation to avoid popup blockers.
      const waUrl = `https://wa.me/905533137888?text=${encodeURIComponent(
        `Merhaba, randevu almak istiyorum.\n\nAd Soyad: ${payload.name}\nTelefon: ${payload.phone}\nE-posta: ${payload.email}\nHizmet: ${serviceOptions.find((s) => s.value === payload.service)?.label ?? payload.service}\nTarih: ${payload.date || "-"}\nMesaj: ${payload.message}${data.id ? `\nReferans: ${data.id}` : ""}`
      )}`;
      setStatus("success");
      form.reset();
      setService(defaultServiceSlug ?? "");
      window.location.href = waUrl;
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-bold text-brand-dark">
            Randevu talebi
          </h3>
          <p className="mt-1 text-sm text-brand-mid">
            Formu gönderdiğinizde ekibimiz {CLINIC.phone} üzerinden sizi arar.
          </p>
        </div>
      </div>
      <Separator className="my-5" />

      {status === "success" ? (
        <div className="space-y-4">
          <p className="rounded-xl bg-brand-primary-light px-4 py-3 text-sm font-medium text-brand-primary">
            Teşekkürler! Talebiniz alındı. En kısa sürede sizi arayacağız.
          </p>
          <div className="rounded-2xl border border-border/70 bg-card p-4 text-sm text-brand-mid">
            <p className="font-medium text-brand-dark">Form nereye gidiyor?</p>
            <p className="mt-2">
              Talebiniz web sitemizin <span className="font-semibold">/api/appointment</span>{" "}
              endpoint’ine gönderilir ve klinik tarafında takip edilmek üzere kayda alınır.
              {lastId ? (
                <>
                  {" "}
                  Referans: <span className="font-mono text-xs">{lastId}</span>
                </>
              ) : null}
            </p>
            <p className="mt-2">
              İsterseniz aynı bilgileri WhatsApp ile anında iletebilirsiniz.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                )}
                href={
                  lastPayload
                    ? `https://wa.me/905533137888?text=${encodeURIComponent(
                        `Merhaba, randevu almak istiyorum.\n\nAd Soyad: ${lastPayload.name}\nTelefon: ${lastPayload.phone}\nE-posta: ${lastPayload.email}\nHizmet: ${serviceOptions.find((s) => s.value === lastPayload.service)?.label ?? lastPayload.service}\nTarih: ${lastPayload.date || "-"}\nMesaj: ${lastPayload.message}${lastId ? `\nReferans: ${lastId}` : ""}`
                      )}`
                    : WHATSAPP_URL
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile gönder
              </a>
              <a
                className={cn(buttonVariants({ variant: "outline" }))}
                href={`tel:${CLINIC.phoneRaw}`}
              >
                {CLINIC.phone} ara
              </a>
              <button
                type="button"
                className={cn(buttonVariants({ variant: "ghost" }))}
                onClick={() => {
                  setStatus("idle");
                  setLastPayload(null);
                  setLastId(null);
                }}
              >
                Yeni talep oluştur
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="apt-name">Ad Soyad</Label>
            <Input id="apt-name" name="name" required placeholder="Adınız Soyadınız" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="apt-phone">Telefon</Label>
              <Input
                id="apt-phone"
                name="phone"
                required
                inputMode="tel"
                placeholder="05xx xxx xx xx"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apt-email">E-posta</Label>
              <Input
                id="apt-email"
                name="email"
                type="email"
                required
                placeholder="ornek@eposta.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Hizmet</Label>
            <Select
              value={service}
              onValueChange={(value) => setService(value ?? "")}
            >
              <SelectTrigger aria-label="Hizmet seçin">
                <SelectValue placeholder="Hizmet seçin" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="apt-date">Tercih Edilen Tarih</Label>
            <Input id="apt-date" name="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apt-msg">Mesaj</Label>
            <Textarea
              id="apt-msg"
              name="message"
              required
              rows={4}
              placeholder="Kısa şikayet / beklentiniz"
            />
          </div>
          {status === "error" && (
            <p className="text-sm text-destructive" role="alert">
              Lütfen zorunlu alanları ve telefon formatını kontrol edin.
            </p>
          )}
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90"
          >
            {status === "loading" ? "Gönderiliyor…" : "Talebi gönder"}
          </Button>
        </form>
      )}
    </div>
  );
}
