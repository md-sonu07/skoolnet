import React from 'react';
import { Skeleton } from '../base/Skeleton';
import { SkeletonAvatar } from '../primitives/SkeletonAvatar';
import { SkeletonInput } from '../patterns/SkeletonInput';
import { SkeletonTextarea } from '../patterns/SkeletonTextarea';
import { SkeletonButton } from '../patterns/SkeletonButton';

/**
 * Profile page skeleton - Updated to match new Manager Profile UI
 */
export const ProfileSkeleton = React.memo(function ProfileSkeleton({
  theme = 'light',
  animation = 'pulse',
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-8 ${className}`} {...props}>
      {/* Header Banner Skeleton */}
      <div className="min-h-[200px] w-full bg-slate-50 border border-slate-200/60 rounded-3xl p-10 flex items-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 w-full">
          {/* Avatar Skeleton */}
          <div className="relative shrink-0">
            <SkeletonAvatar size={144} theme={theme} animation={animation} className="rounded-3xl border-4 border-white shadow-sm" />
          </div>

          {/* Info Summary Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Skeleton width="40%" height={32} theme={theme} animation={animation} variant="text" />
              <div className="flex gap-3">
                <Skeleton width="100px" height={20} theme={theme} animation={animation} variant="rectangle" className="rounded-lg" />
                <Skeleton width="180px" height={20} theme={theme} animation={animation} variant="rectangle" className="rounded-lg" />
              </div>
            </div>
          </div>

          {/* Edit Button Skeleton */}
          <div className="hidden md:block">
            <Skeleton width={130} height={42} theme={theme} animation={animation} variant="rectangle" className="rounded-xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Organization Identity */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm">
            <Skeleton width="150px" height={20} theme={theme} animation={animation} variant="text" className="mb-6" />
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <Skeleton width={96} height={96} theme={theme} animation={animation} variant="rectangle" className="rounded-2xl" />
              <Skeleton width="120px" height={36} theme={theme} animation={animation} variant="rectangle" className="rounded-xl" />
            </div>

            <div className="space-y-4">
              <SkeletonInput theme={theme} animation={animation} labelWidth="100px" />
              <SkeletonInput theme={theme} animation={animation} labelWidth="80px" />
              {/* <div className="space-y-2 pt-2">
                <Skeleton width="100%" height={14} theme={theme} animation={animation} variant="text" />
                <Skeleton width="100%" height={100} theme={theme} animation={animation} variant="rectangle" className="rounded-2xl" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Personal Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <Skeleton width="220px" height={20} theme={theme} animation={animation} variant="text" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <SkeletonInput theme={theme} animation={animation} labelWidth="80px" />
              <SkeletonInput theme={theme} animation={animation} labelWidth="80px" />
              <SkeletonInput theme={theme} animation={animation} labelWidth="100px" />
              <SkeletonInput theme={theme} animation={animation} labelWidth="120px" />
              <div className="md:col-span-2">
                <SkeletonInput theme={theme} animation={animation} labelWidth="60px" />
              </div>
            </div>

            {/* Bottom Actions Skeleton */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton variant="circle" width={40} height={40} theme={theme} animation={animation} />
                <div className="space-y-1">
                  <Skeleton width={150} height={12} theme={theme} animation={animation} variant="text" />
                  <Skeleton width={100} height={10} theme={theme} animation={animation} variant="text" opacity={0.6} />
                </div>
              </div>
              <Skeleton width={160} height={42} theme={theme} animation={animation} variant="rectangle" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProfileSkeleton.displayName = 'ProfileSkeleton';