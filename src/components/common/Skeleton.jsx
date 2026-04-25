import React from 'react';

/**
 * A flexible, reusable Skeleton loader component that adapts to any layout.
 * Supports various shapes: text, circle, and rectangle.
 */
export const Skeleton = ({ 
  className = '', 
  width, 
  height, 
  variant = 'rectangle', // 'text', 'circle', 'rectangle'
  ...props 
}) => {
  const baseStyles = 'animate-pulse bg-slate-200';
  
  const variantStyles = {
    text: 'h-4 w-full rounded-md',
    circle: 'rounded-full',
    rectangle: 'rounded-2xl',
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      {...props}
    />
  );
};

/**
 * Specialized Skeleton for text blocks with multiple lines.
 */
export const SkeletonText = ({ lines = 3, className = '', ...props }) => {
  return (
    <div className={`space-y-3 ${className}`} {...props}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          variant="text" 
          width={i === lines - 1 && lines > 1 ? '60%' : '100%'} 
        />
      ))}
    </div>
  );
};

/**
 * Specialized Skeleton for circular avatars or icons.
 */
export const SkeletonCircle = ({ size = '40px', className = '', ...props }) => {
  return (
    <Skeleton 
      variant="circle" 
      width={size} 
      height={size} 
      className={className} 
      {...props} 
    />
  );
};

/**
 * A comprehensive Profile Skeleton example that can be reused in profile pages.
 */
export const ProfileSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="space-y-2">
          <Skeleton width="100px" height="12px" className="rounded-full" />
          <Skeleton width="200px" height="32px" />
          <Skeleton width="300px" height="16px" className="rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Card Skeleton */}
        <div className="glass-card p-8 rounded-3xl border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <SkeletonCircle size="80px" className="rounded-2xl shrink-0" />
            <div className="space-y-3 flex-1">
              <Skeleton width="70%" height="24px" />
              <Skeleton width="50%" height="16px" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton height="60px" className="rounded-xl" />
            <Skeleton height="60px" className="rounded-xl" />
            <Skeleton height="40px" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Right Content Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-slate-100">
            <div className="mb-6 space-y-2">
              <Skeleton width="150px" height="20px" />
              <Skeleton width="100px" height="12px" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2"><Skeleton height="14px" width="80px" /><Skeleton height="40px" className="rounded-lg" /></div>
              <div className="space-y-2"><Skeleton height="14px" width="80px" /><Skeleton height="40px" className="rounded-lg" /></div>
              <div className="space-y-2"><Skeleton height="14px" width="80px" /><Skeleton height="40px" className="rounded-lg" /></div>
              <div className="space-y-2"><Skeleton height="14px" width="80px" /><Skeleton height="40px" className="rounded-lg" /></div>
            </div>
            <div className="flex gap-3">
              <Skeleton width="120px" height="40px" className="rounded-xl" />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-100">
            <div className="mb-4"><Skeleton width="180px" height="20px" /></div>
            <Skeleton height="80px" className="rounded-lg" />
          </div>

          <div className="glass-card p-6 rounded-3xl border border-slate-100 flex items-center justify-between gap-4">
             <div className="flex items-center gap-3">
               <SkeletonCircle size="40px" className="shrink-0" />
               <div className="space-y-1">
                 <Skeleton width="150px" height="16px" />
                 <Skeleton width="200px" height="10px" />
               </div>
             </div>
             <Skeleton width="100px" height="36px" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * A comprehensive Dashboard Skeleton that can be reused in overview pages.
 */
export const DashboardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="space-y-2">
          <Skeleton width="120px" height="12px" className="rounded-full" />
          <Skeleton width="180px" height="32px" />
          <Skeleton width="250px" height="16px" className="rounded-full" />
        </div>
        <div className="flex gap-2">
          <Skeleton width="120px" height="40px" className="rounded-xl" />
          <Skeleton width="120px" height="40px" className="rounded-xl" />
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-l-4 border-slate-100 bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between mb-3">
              <Skeleton variant="circle" width="16px" height="16px" />
              <Skeleton width="30px" height="12px" />
            </div>
            <Skeleton width="50%" height="28px" className="mb-2" />
            <Skeleton width="70%" height="16px" className="mb-1" />
            <Skeleton width="40%" height="12px" />
          </div>
        ))}
      </div>

      {/* Content Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-3xl border border-slate-100">
          <div className="mb-6 space-y-2">
            <Skeleton width="150px" height="20px" />
            <Skeleton width="250px" height="12px" />
          </div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 py-2">
                <SkeletonCircle size="40px" className="rounded-xl shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton width="40%" height="14px" />
                  <Skeleton width="60%" height="10px" />
                </div>
                <Skeleton width="50px" height="10px" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-3xl border border-slate-100">
          <div className="mb-6 space-y-2">
            <Skeleton width="150px" height="20px" />
            <Skeleton width="250px" height="12px" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-100 space-y-3">
                <Skeleton variant="circle" width="24px" height="24px" />
                <Skeleton width="80%" height="16px" />
                <Skeleton width="100%" height="10px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
