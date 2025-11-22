"use client"

import { useState, useEffect } from "react"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Calendar,
  School,
  BookOpen,
  ExternalLink,
  Github,
  Code2,
  Zap,
  Smartphone,
  Shield,
  Cloud,
} from "lucide-react"

export default function ProfilePage() {
  const profileData = {
    nama: "Azzam Syaiful Islam",
    nim: "21120123120035",
    kelompok: "24",
    email: "azzamsyaifulislam@students.undip.ac.id",
    phone: "+62 813-3143-7810",
    prodi: "Teknik Komputer",
    fakultas: "Fakultas Teknik",
    angkatan: "2023",
    alamat: "Semarang, Jawa Tengah",
  }

  const features = [
    {
      icon: BookOpen,
      title: "Koleksi Digital Lengkap",
      description: "Akses ribuan koleksi buku fiksi dan non-fiksi Indonesia dalam satu aplikasi yang mudah digunakan.",
    },
    {
      icon: Smartphone,
      title: "Progressive Web App",
      description:
        "Install aplikasi ini di perangkat Anda dan gunakan seperti aplikasi native tanpa perlu download dari app store.",
    },
    {
      icon: Zap,
      title: "Performa Optimal",
      description: "Loading cepat dengan optimasi gambar dan caching pintar untuk pengalaman pengguna yang smooth.",
    },
    {
      icon: Shield,
      title: "Fitur Offline",
      description: "Baca buku favorit Anda kapan saja, bahkan tanpa koneksi internet berkat teknologi Service Worker.",
    },
    {
      icon: Cloud,
      title: "Sinkronisasi Cloud",
      description: "Data favorit Anda tersimpan aman dan dapat diakses dari berbagai perangkat.",
    },
    {
      icon: Code2,
      title: "Teknologi Modern",
      description:
        "Dibangun dengan React, Next.js, TypeScript, dan Tailwind CSS untuk kode yang maintainable dan scalable.",
    },
  ]

  const techStack = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Progressive Web App",
    "Service Worker",
    "Responsive Design",
    "Web APIs",
  ]

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  //  Ambil foto profil GitHub
  useEffect(() => {
    fetch("https://api.github.com/users/azzm04")
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url))
      .catch((err) => console.error("Gagal memuat avatar GitHub:", err))
  }, [])

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-linear-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl w-32 h-32" />
              <div className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-full w-32 h-32">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="GitHub Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <User className="w-16 h-16 text-primary animate-pulse" />
                  )}
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {profileData.nama}
              </h1>
              <p className="text-lg text-primary font-semibold">
                NIM: {profileData.nim}
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-accent" />
                <p className="text-accent font-medium">
                  Kelompok {profileData.kelompok} Praktikan Praktikum PPB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Profil */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <ProfileCard
            icon={<Mail className="w-6 h-6 text-primary" />}
            label="Email"
            value={profileData.email}
            color="primary"
          />

          {/* Phone Card */}
          <ProfileCard
            icon={<Phone className="w-6 h-6 text-accent" />}
            label="Telepon"
            value={profileData.phone}
            color="accent"
          />

          {/* Location Card */}
          <ProfileCard
            icon={<MapPin className="w-6 h-6 text-primary" />}
            label="Alamat"
            value={profileData.alamat}
            color="primary"
          />

          {/* Program Studi Card */}
          <ProfileCard
            icon={<Award className="w-6 h-6 text-accent" />}
            label="Program Studi"
            value={profileData.prodi}
            color="accent"
          />

          {/* Fakultas Card */}
          <ProfileCard
            icon={<School className="w-6 h-6 text-primary" />}
            label="Fakultas"
            value={profileData.fakultas}
            color="primary"
          />

          {/* Angkatan Card */}
          <ProfileCard
            icon={<Calendar className="w-6 h-6 text-accent" />}
            label="Angkatan"
            value={profileData.angkatan}
            color="accent"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="border-t border-border/40" />
      </div>

      {/* About Application Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-accent/10 border border-accent/30 px-3 md:px-6 py-1.5 md:py-3 rounded-full mb-4 md:mb-6">
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-accent">
              Tentang Book Shelf Management
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance mb-3 md:mb-4">
            Transformasi Digital untuk Membaca Buku
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance leading-relaxed max-w-3xl">
            Book Shelf Management adalah aplikasi inovatif yang menggabungkan teknologi web modern dengan kecintaan
            terhadap literasi. Kami memberikan akses mudah ke koleksi buku terbaik Indonesia dalam genggaman Anda.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
          Fitur Unggulan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border/60 rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-2.5 md:p-3 bg-primary/10 border border-primary/20 rounded-lg w-fit mb-3 md:mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 text-left">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-left leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="bg-card border border-border/60 rounded-xl p-6 md:p-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Stack Teknologi
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-3 md:px-5 py-1.5 md:py-2.5 bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm md:text-base rounded-full font-medium hover:bg-primary/15 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Vision Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* About Project */}
          <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-5">
              Tentang Proyek Ini
            </h3>
            <div className="space-y-2.5 md:space-y-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Book Shelf Management dikembangkan sebagai tugas akhir praktikum mata kuliah {" "}
                <strong className="text-foreground">Pemrograman Perangkat Bergerak</strong> di Universitas
                Diponegoro.
              </p>
              <p>
                Proyek ini mendemonstrasikan implementasi teknologi Progressive Web App yang modern, dengan fokus pada
                user experience, performa, dan aksesibilitas.
              </p>
              <p>
                Semua fitur dirancang dengan user-centric approach untuk memastikan pengalaman membaca digital yang
                menyenangkan dan intuitif.
              </p>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-5">Visi & Misi</h3>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary mb-2">Visi</h4>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Menjadi platform digital yang memberdayakan masyarakat Indonesia untuk mengakses pengetahuan melalui
                  literasi digital yang inklusif dan berkelanjutan.
                </p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-accent mb-2">Misi</h4>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Menyediakan akses mudah ke koleksi buku berkualitas, meningkatkan minat membaca, dan membuktikan bahwa
                  teknologi web modern dapat menciptakan solusi bermakna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 pb-10 md:pb-20">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 md:p-10 text-center">
          <Github className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-5" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            Kode Sumber & GitHub
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-5 md:mb-7 max-w-2xl mx-auto leading-relaxed">
            Kunjungi GitHub saya untuk melihat proyek ini dan project lainnya, serta kontribusi dalam pengembangan
            aplikasi web modern.
          </p>
          <a
            href="https://github.com/azzm04/book-shelf-management"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            azzm04 GitHub
            <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}

function ProfileCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: "primary" | "accent"
}) {
  const colorClass =
    color === "primary"
      ? "bg-primary/10 border-primary/20 group-hover:bg-primary/15"
      : "bg-accent/10 border-accent/20 group-hover:bg-accent/15"

  return (
    <div className="group bg-card border border-border/60 rounded-xl p-8 hover:shadow-lg hover:border-primary/40 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg border ${colorClass} transition-colors`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium mb-1">
            {label}
          </p>
          <p className="font-semibold text-foreground break-all">{value}</p>
        </div>
      </div>
    </div>
  )
}
