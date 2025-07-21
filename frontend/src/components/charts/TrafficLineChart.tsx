'use client';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: '방문 수',
    color: 'hsl(220, 70%, 50%)',
    data: [
      { x: '6/01', y: 120 },
      { x: '6/02', y: 200 },
      { x: '6/03', y: 150 },
      { x: '6/04', y: 250 },
      { x: '6/05', y: 180 },
      { x: '6/06', y: 300 },
      { x: '6/07', y: 220 },
    ],
  },
];

export default function TrafficLineChart() {
  return (
    <div style={{ height: 220, width: '100%' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 30, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '날짜',
          legendOffset: 32,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '방문 수',
          legendOffset: -36,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'category10' }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        areaOpacity={0.15}
        useMesh={true}
        theme={{
          textColor: '#222',
          fontSize: 12,
          axis: { domain: { line: { stroke: '#ddd' } } },
          grid: { line: { stroke: '#eee', strokeDasharray: '2 2' } },
        }}
      />
    </div>
  );
} 