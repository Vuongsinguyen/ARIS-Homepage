'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

interface SkillsChartProps {
  skillsData: Array<{
    skill: string;
    value: number;
    fullMark: number;
  }>;
}

export default function SkillsChart({ skillsData }: SkillsChartProps) {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skillsData}>
          <PolarGrid stroke="#E5E7EB" className="dark:stroke-gray-600" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{
              fill: '#374151',
              fontSize: 12,
              fontWeight: 500
            }}
            className="dark:fill-white"
          />
          <PolarRadiusAxis
            angle={90}
            tick={{ fill: '#6B7280', fontSize: 10 }}
            className="dark:fill-gray-400"
            tickCount={6}
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}