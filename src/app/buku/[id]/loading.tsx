// app/buku/[id]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left - Book Cover Skeleton */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <Skeleton className="w-full aspect-3/4 rounded-xl" />
              <div className="flex gap-3 mt-6 md:hidden">
                <Skeleton className="flex-1 h-12 rounded-lg" />
                <Skeleton className="flex-1 h-12 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Right - Book Info Skeleton */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />

              <div className="flex gap-4 pt-4 border-t border-border/60">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-7 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="hidden md:flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
