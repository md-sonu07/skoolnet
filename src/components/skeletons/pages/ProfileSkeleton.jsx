import React from 'react';
import { Skeleton } from '../base/Skeleton';
import { SkeletonAvatar } from '../primitives/SkeletonAvatar';
import { SkeletonInput } from '../patterns/SkeletonInput';
import { SkeletonTextarea } from '../patterns/SkeletonTextarea';
import { SkeletonButton } from '../patterns/SkeletonButton';

/**
 * Profile page skeleton - matches School Profile page
 * Realistic layout with form sections
 */
export const ProfileSkeleton = React.memo(function ProfileSkeleton({
  theme = 'light',
  animation = 'pulse',
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-6 ${className}`} {...props}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Overview */}
        <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 overflow-visible">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <SkeletonAvatar size={80} theme={theme} animation={animation} className="rounded-2xl shrink-0" />
              <div className="space-y-2">
                <Skeleton width="60%" height={18} theme={theme} animation={animation} variant="text" />
                <Skeleton width="40%" height={14} theme={theme} animation={animation} variant="text" />
              </div>
            </div>

            <Skeleton height={36} className="w-full rounded-xl mb-3" theme="surface" animation={animation} />
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput theme={theme} animation={animation} labelWidth="80px" />
                <SkeletonInput theme={theme} animation={animation} labelWidth="112px" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput theme={theme} animation={animation} labelWidth="96px" />
                <div className="space-y-1.5">
                  <Skeleton width={128} height={12} theme={theme} animation={animation} variant="text" />
                  <Skeleton height={36} theme={theme} animation={animation} variant="rectangle" />
                </div>
              </div>
              <SkeletonInput theme={theme} animation={animation} labelWidth="152px" />
              <SkeletonTextarea theme={theme} animation={animation} labelWidth="144px" rows={2} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput theme={theme} animation={animation} labelWidth="48px" />
                <SkeletonInput theme={theme} animation={animation} labelWidth="48px" />
              </div>
              <div className="flex gap-3 pt-2">
                <SkeletonButton width={140} theme={theme} animation={animation} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-slate-100/50 gap-4">
          <div className="flex gap-3 items-center w-full">
            <Skeleton variant="rectangle" width={36} height={36} theme={theme} animation={animation} className="rounded-lg" />
            <div className="space-y-1 w-full max-w-[200px]">
              <Skeleton width="100%" height={12} theme={theme} animation={animation} variant="text" />
              <Skeleton width="60%" height={9} theme={theme} animation={animation} variant="text" opacity={0.6} />
            </div>
          </div>
          <Skeleton width={120} height={36} theme={theme} animation={animation} variant="rectangle" />
        </div>
      </div>
    </div>
  );
});

ProfileSkeleton.displayName = 'ProfileSkeleton';