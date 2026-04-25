import React from 'react';
import { SectionCard } from './DashboardPrimitives';

// ============================================================
// BASE SKELETON COMPONENT - Fully Customizable
// ============================================================

/**
 * Base Skeleton component with extensive customization options
 * 
 * @param {string} className - Additional CSS classes
 * @param {string|number} width - Width (e.g., '100%', '200px', 100)
 * @param {string|number} height - Height (e.g., '20px', 40)
 * @param {'text'|'circle'|'rectangle'|'rounded'} variant - Shape variant
 * @param {'slate'|'primary'|'secondary'|'accent'|'surface'|'custom'} theme - Color theme
 * @param {'pulse'|'shimmer'|'wave'|'glow'} animation - Animation type
 * @param {number} opacity - Opacity level (0-1)
 * @param {boolean} gradient - Use gradient background
 * @param {string} gradientFrom - Gradient start color
 * @param {string} gradientTo - Gradient end color
 * @param {string} border - Border style
 * @param {string} shadow - Shadow style
 */
export const Skeleton = ({
  className = '',
  width,
  height,
  variant = 'rectangle',
  theme = 'slate',
  animation = 'pulse',
  opacity = 1,
  gradient = false,
  gradientFrom,
  gradientTo,
  border = 'none',
  shadow = 'none',
  style = {},
  ...props
}) => {
  // Theme color schemes
  const themes = {
    slate: 'bg-slate-200',
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    accent: 'bg-amber-100',
    surface: 'bg-surface-100',
    custom: '',
  };

  // Variant shapes
  const variants = {
    text: 'h-4 w-full rounded-md',
    circle: 'rounded-full',
    rectangle: 'rounded-2xl',
    rounded: 'rounded-xl',
  };

  // Animation types
  const animations = {
    pulse: 'animate-pulse',
    shimmer: 'animate-shimmer',
    wave: 'animate-wave',
    glow: 'animate-glow',
  };

  // Border options
  const borders = {
    none: '',
    thin: 'border border-slate-200',
    medium: 'border-2 border-slate-200',
    dashed: 'border border-dashed border-slate-200',
  };

  // Shadow options
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    inner: 'shadow-inner',
  };

  // Gradient backgrounds
  const gradientStyles = gradientFrom && gradientTo
    ? `bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}]`
    : gradient
    ? 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200'
    : '';

  const baseStyle = {
    width: typeof width === 'number' ? `${width}px` : width || undefined,
    height: typeof height === 'number' ? `${height}px` : height || undefined,
    opacity,
    ...style,
  };

  return (
    <div
      className={`
        ${themes[theme]} ${variants[variant]} ${animations[animation]}
        ${borders[border]} ${shadows[shadow]} ${gradientStyles}
        ${className}
      `}
      style={baseStyle}
      aria-busy="true"
      aria-label="Loading content"
      {...props}
    />
  );
};

// ============================================================
// TEXT SKELETON VARIANTS
// ============================================================

/**
 * Text block with multiple lines
 */
export const SkeletonText = ({
  lines = 3,
  width = '100%',
  lastLineWidth = '60%',
  theme = 'slate',
  animation = 'pulse',
  spacing = 'space-y-3',
  className = '',
  ...props
}) => {
  return (
    <div className={`${spacing} ${className}`} {...props}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          theme={theme}
          animation={animation}
          width={i === lines - 1 && lines > 1 ? lastLineWidth : width}
        />
      ))}
    </div>
  );
};

/**
 * Heading skeleton (larger text)
 */
export const SkeletonHeading = ({
  level = 2,
  width = '200px',
  height,
  theme = 'slate',
  className = '',
  ...props
}) => {
  const heights = { 1: '40px', 2: '32px', 3: '28px', 4: '24px' };
  return (
    <Skeleton
      variant="rectangle"
      width={width}
      height={height || heights[level]}
      theme={theme}
      className={`rounded-lg ${className}`}
      {...props}
    />
  );
};

// ============================================================
// AVATAR & IMAGE SKELETONS
// ============================================================

/**
 * Circular avatar skeleton
 */
export const SkeletonAvatar = ({
  size = 40,
  theme = 'surface',
  animation = 'pulse',
  border = true,
  className = '',
  ...props
}) => {
  return (
    <Skeleton
      variant="circle"
      width={size}
      height={size}
      theme={theme}
      animation={animation}
      border={border ? 'thin' : 'none'}
      className={className}
      {...props}
    />
  );
};

/**
 * Rectangular image/media skeleton
 */
export const SkeletonMedia = ({
  width = '100%',
  height = 200,
  ratio = null, // e.g., '16/9', '4/3', '1/1'
  theme = 'surface',
  animation = 'pulse',
  rounded = 'lg',
  className = '',
  ...props
}) => {
  const ratioClasses = {
    '16/9': 'pb-[56.25%]',
    '4/3': 'pb-[75%]',
    '1/1': 'pb-[100%]',
    '21/9': 'pb-[42.85%]',
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  if (ratio) {
    return (
      <div
        className={`relative w-full ${ratioClasses[ratio]} ${roundedClasses[rounded]} ${className}`}
        {...props}
      >
        <Skeleton
          variant="rectangle"
          theme={theme}
          animation={animation}
          className={`absolute inset-0 ${roundedClasses[rounded]}`}
        />
      </div>
    );
  }

  return (
    <Skeleton
      variant="rectangle"
      width={width}
      height={height}
      theme={theme}
      animation={animation}
      className={`rounded-${rounded} ${className}`}
      {...props}
    />
  );
};

// ============================================================
// FORM FIELD SKELETONS
// ============================================================

/**
 * Input field skeleton (label + input)
 */
export const SkeletonInput = ({
  labelWidth = '30%',
  height = 38,
  theme = 'slate',
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-1.5 ${className}`} {...props}>
      <Skeleton width={labelWidth} height="14px" theme={theme} variant="text" />
      <Skeleton height={height} theme={theme} className="rounded-lg" />
    </div>
  );
};

/**
 * Textarea skeleton (label + textarea)
 */
export const SkeletonTextarea = ({
  labelWidth = '30%',
  rows = 2,
  theme = 'slate',
  className = '',
  ...props
}) => {
  const height = rows === 2 ? 64 : rows === 3 ? 96 : 128;
  return (
    <div className={`space-y-1.5 ${className}`} {...props}>
      <Skeleton width={labelWidth} height="14px" theme={theme} variant="text" />
      <Skeleton height={height} theme={theme} className="rounded-lg" />
    </div>
  );
};

/**
 * Select dropdown skeleton
 */
export const SkeletonSelect = ({ labelWidth = '30%', height = 40, theme = 'slate', className = '', ...props }) => {
  return (
    <div className={`space-y-1.5 ${className}`} {...props}>
      <Skeleton width={labelWidth} height="14px" theme={theme} variant="text" />
      <Skeleton height={height} theme={theme} className="rounded-lg" />
    </div>
  );
};

// ============================================================
// BUTTON & ACTION SKELETONS
// ============================================================

/**
 * Button skeleton
 */
export const SkeletonButton = ({
  width = 120,
  height = 40,
  theme = 'primary',
  rounded = 'xl',
  className = '',
  ...props
}) => {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <Skeleton
      width={width}
      height={height}
      theme={theme}
      className={`${roundedClasses[rounded]} ${className}`}
      {...props}
    />
  );
};

export const SkeletonIconButton = ({ size = 40, theme = 'surface', className = '', ...props }) => (
  <SkeletonButton width={size} height={size} theme={theme} rounded="full" className={className} {...props} />
);

// ============================================================
// LIST & TABLE SKELETONS
// ============================================================

/**
 * List item skeleton (icon + text)
 */
export const SkeletonListItem = ({
  avatar = false,
  avatarSize = 40,
  hasMeta = false,
  theme = 'slate',
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-100 ${className}`} {...props}>
      {avatar && <SkeletonAvatar size={avatarSize} theme={theme} />}
      <div className="space-y-2 w-full">
        <Skeleton width="60%" height="14px" theme={theme} />
        {hasMeta && <Skeleton width="40%" height="10px" theme={theme} opacity={0.7} />}
      </div>
    </div>
  );
};

/**
 * List with multiple items
 */
export const SkeletonList = ({
  items = 4,
  avatar = false,
  hasMeta = false,
  theme = 'slate',
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-3 ${className}`} {...props}>
      {[...Array(items)].map((_, i) => (
        <SkeletonListItem key={i} avatar={avatar} avatarSize={avatar ? 40 : 0} hasMeta={hasMeta} theme={theme} />
      ))}
    </div>
  );
};

/**
 * Table skeleton
 */
export const SkeletonTable = ({
  rows = 5,
  cols = 4,
  hasHeader = true,
  theme = 'slate',
  className = '',
  ...props
}) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-100 bg-white ${className}`} {...props}>
      {hasHeader && (
        <div className="grid gap-2 p-4 border-b border-slate-100" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {[...Array(cols)].map((_, i) => (
            <Skeleton key={i} height={16} width="80%" theme={theme} variant="text" />
          ))}
        </div>
      )}
      <div className="p-4 space-y-3">
        {[...Array(rows)].map((_, i) => (
          <div key={i} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {[...Array(cols)].map((_, j) => (
              <Skeleton key={j} height={14} theme={theme} variant="text" opacity={0.6 + (j % 3) * 0.2} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// CARD SKELETONS
// ============================================================

/**
 * Basic card skeleton
 */
export const SkeletonCard = ({
  width = '100%',
  height = 200,
  theme = 'surface',
  rounded = 'xl',
  hasHeader = false,
  hasFooter = false,
  className = '',
  ...props
}) => {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };

  return (
    <div
      className={`border border-slate-100 bg-white ${roundedClasses[rounded]} ${className}`}
      style={{ width }}
      {...props}
    >
      {hasHeader && (
        <div className="p-4 border-b border-slate-100">
          <Skeleton width="40%" height={20} theme={theme} />
        </div>
      )}
      <div className="p-4">
        <Skeleton width="100%" height={height - (hasHeader ? 60 : 0) - (hasFooter ? 60 : 0)} theme={theme} />
      </div>
      {hasFooter && (
        <div className="p-4 border-t border-slate-100">
          <Skeleton width="60%" height={16} theme={theme} />
        </div>
      )}
    </div>
  );
};

/**
 * Metric card skeleton (matches DashboardPrimitives MetricCard)
 */
export const SkeletonMetricCard = ({ theme = 'blue', className = '', ...props }) => {
  const themeColors = {
    blue: 'from-blue-100 to-cyan-50',
    emerald: 'from-emerald-100 to-teal-50',
    amber: 'from-amber-100 to-orange-50',
    rose: 'from-rose-100 to-pink-50',
  };

  return (
    <div className={`border-l-4 border-slate-200 bg-gradient-to-br ${themeColors[theme]} rounded-lg shadow-sm p-4 animate-pulse ${className}`} {...props}>
      <div className="flex items-center justify-between mb-2">
        <Skeleton variant="circle" width={16} height={16} theme="surface" />
        <Skeleton width={30} height={12} theme="surface" />
      </div>
      <Skeleton width="50%" height={28} theme="slate" className="mb-2" />
      <Skeleton width="70%" height={16} theme="surface" />
      <Skeleton width="40%" height={10} theme="surface" className="mt-1" />
    </div>
  );
};

/**
 * Section card skeleton (matches DashboardPrimitives SectionCard)
 */
export const SkeletonSectionCard = ({ title = true, description = false, children, className = '', ...props }) => {
  return (
    <SectionCard title={title ? <Skeleton width="150px" height="20px" /> : null} description={description ? <Skeleton width="200px" height="12px" /> : null} className={className} {...props}>
      {children}
    </SectionCard>
  );
};

// ============================================================
// PAGE-LEVEL SKELETON TEMPLATES
// ============================================================

/**
 * School Profile Page Skeleton - matches the actual Profile page layout
 */
export const ProfileSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Overview */}
        <SectionCard title="Overview" description="Your institutional identity" className="overflow-visible">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <SkeletonAvatar size={80} theme="surface" className="rounded-2xl shrink-0" />
              <div className="space-y-2.5 w-full">
                <Skeleton width="60%" height={20} theme="slate" />
                <Skeleton width="40%" height={16} theme="slate" />
                <Skeleton width={100} height={12} theme="primary" className="mt-2" />
              </div>
            </div>

            <Skeleton height={40} className="w-full rounded-xl mb-3" theme="surface" />
          </div>
        </SectionCard>

        {/* Right Column: Administrator Details */}
        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Administrator Details" description="Your personal contact information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput labelWidth="80px" theme="slate" />
                <SkeletonInput labelWidth="112px" theme="slate" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput labelWidth="96px" theme="slate" />
                <div className="space-y-1.5">
                  <Skeleton width={128} height={14} theme="slate" />
                  <Skeleton height={40} className="rounded-lg" theme="slate" />
                </div>
              </div>
              <SkeletonInput labelWidth="152px" theme="slate" />
              <SkeletonTextarea labelWidth="144px" rows={2} theme="slate" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkeletonInput labelWidth="48px" theme="slate" />
                <SkeletonInput labelWidth="48px" theme="slate" />
              </div>
              <div className="flex gap-3 pt-2">
                <SkeletonButton width={140} theme="primary" />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Security & Authentication */}
      <SectionCard title="Security & Authentication">
        <div className="w-full min-h-[74px] bg-slate-50 border border-slate-100 rounded-xl flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
          <div className="flex gap-3 w-full">
            <Skeleton width={40} height={40} theme="surface" className="rounded-lg shrink-0" />
            <div className="space-y-2 w-full max-w-[200px] mt-1">
              <Skeleton width="100%" height={14} theme="slate" />
              <Skeleton width="75%" height={10} theme="slate" />
            </div>
          </div>
          <Skeleton width={144} height={40} theme="surface" className="rounded-lg shrink-0 w-full sm:w-auto" />
        </div>
      </SectionCard>
    </div>
  );
};

/**
 * A comprehensive Dashboard Skeleton that can be reused in overview pages.
 */
export const DashboardSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="space-y-2">
          <Skeleton width={120} height={12} theme="surface" className="rounded-full" />
          <Skeleton width={180} height={32} theme="slate" />
          <Skeleton width={250} height={16} theme="surface" className="rounded-full" />
        </div>
        <div className="flex gap-2">
          <SkeletonButton width={120} theme="primary" />
          <SkeletonButton width={120} theme="surface" />
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SkeletonMetricCard theme="blue" />
        <SkeletonMetricCard theme="emerald" />
        <SkeletonMetricCard theme="amber" />
        <SkeletonMetricCard theme="rose" />
      </div>

      {/* Content Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkeletonCard rounded="3xl" height={400} hasHeader={false} hasFooter={false} />
        <SkeletonCard rounded="3xl" height={400} hasHeader={false} hasFooter={false} />
      </div>
    </div>
  );
};

/**
 * Teacher List Skeleton
 */
export const TeachersSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <SkeletonButton width={100} height={36} theme="primary" />
        <SkeletonButton width={100} height={36} theme="surface" />
      </div>
      <SkeletonList items={6} avatar={true} hasMeta={true} />
    </div>
  );
};

/**
 * Students Table Skeleton
 */
export const StudentsTableSkeleton = () => {
  return <SkeletonTable rows={8} cols={5} hasHeader={true} />;
};
