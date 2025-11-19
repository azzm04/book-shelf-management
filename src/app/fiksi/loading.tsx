// app/fiksi/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Search } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-linear-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 border border-primary/20 backdrop-blur-sm p-4 rounded-2xl">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Skeleton className="w-full h-12 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid Skeleton */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-3/4 rounded-xl" />
              <div className="space-y-2 p-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
