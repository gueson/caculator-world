interface CalculatorDisplayProps {
  expression: string;
  result: string;
}

export default function CalculatorDisplay({ expression, result }: CalculatorDisplayProps) {
  return (
    <div className="bg-bg-tertiary rounded-card p-4 mb-4">
      <div className="text-right text-text-tertiary text-sm h-6 mb-2 overflow-x-auto whitespace-nowrap">
        {expression || '0'}
      </div>
      <div className="text-right text-3xl font-mono text-text-primary overflow-x-auto whitespace-nowrap">
        {result}
      </div>
    </div>
  );
}
