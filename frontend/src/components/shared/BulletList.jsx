import React from 'react';

const BulletList = ({ items, className = "" }) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-mentor-muted">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mentor-blue flex-shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(BulletList);
