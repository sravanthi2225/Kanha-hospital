import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

export default function CountUpStat({
  number,
  prefix = '',
  suffix = '',
  label,
  description,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A8F] tracking-tight flex items-center justify-center font-heading">
        {prefix && <span>{prefix}</span>}
        {isInView ? (
          <CountUp end={number} duration={2.5} separator="," />
        ) : (
          <span>0</span>
        )}
        {suffix && <span className="text-[#2F5BEA] ml-0.5">{suffix}</span>}
      </div>
      <div className="text-sm sm:text-base font-bold text-slate-800 mt-2 font-heading">
        {label}
      </div>
      {description && (
        <div className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}

