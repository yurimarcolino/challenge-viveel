import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

type PropsData = {
  name: string;
  value: number;
};

type Props = {
  data: PropsData[];
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function TwoSimplePieChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={20} height={20}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#0E212E"
          label={renderCustomizedLabel}
          labelLine={false}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
