'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
import ScientificPanel from './ScientificPanel';
import HistoryPanel from './HistoryPanel';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');
  const [showScientific, setShowScientific] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<Array<{ expression: string; result: string }>>([]);
  const { t } = useTranslation();

const parseTrigFunctions = (expr: string): string => {
    // Replace sin(, cos(, tan( with Math equivalents that handle degrees
    return expr
      .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
      .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
      .replace(/tan\(/g, 'Math.tan(Math.PI/180*');
  };

  const balanceBrackets = (expr: string): string => {
    let openCount = 0;
    let closeCount = 0;
    
    for (const char of expr) {
      if (char === '(') openCount++;
      if (char === ')') closeCount++;
    }
    
    let balancedExpr = expr;
    const missingBrackets = openCount - closeCount;
    
    for (let i = 0; i < missingBrackets; i++) {
      balancedExpr += ')';
    }
    
    return balancedExpr;
  };

  const parsePercentageExpression = (expr: string): string => {
    if (!expr.includes('%')) return expr;

    let result = '';
    let openParenCount = 0;
    let i = 0;

    while (i < expr.length) {
      if (expr[i] === '%') {
        const nextChar = i + 1 < expr.length ? expr[i + 1] : '';

        if (nextChar === '' || ['+', '-', '*', '/', '÷', '×'].includes(nextChar) || nextChar === '%') {
          result += '/100';
        } else if (nextChar.match(/\d/)) {
          result += '*(';
          openParenCount++;
        } else {
          result += expr[i];
        }
      } else {
        result += expr[i];
      }
      i++;
    }

    while (openParenCount > 0) {
      result += '/100)';
      openParenCount--;
    }

    return result;
  };

  const handleCalculate = (expr: string) => {
    if (!expr || expr.trim() === '') {
      return;
    }
    
    try {
      let parsedExpr = parsePercentageExpression(expr);
      parsedExpr = parseTrigFunctions(parsedExpr);
      parsedExpr = balanceBrackets(parsedExpr);
      
      const evalResult = eval(parsedExpr);
      const formattedResult = typeof evalResult === 'number' ? evalResult.toFixed(8).replace(/\.?0+$/, '') : evalResult.toString();
      setResult(formattedResult);
      setExpression(formattedResult);

      const newHistory = [{ expression: expr, result: formattedResult }, ...history].slice(0, 20);
      setHistory(newHistory);
      localStorage.setItem('calculatorHistory', JSON.stringify(newHistory));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('0');
  };

  const handleDelete = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const handleInput = (value: string) => {
    if (value === 'C') {
      handleClear();
    } else if (value === 'DEL') {
      handleDelete();
    } else if (value === '%') {
      handlePercentage();
    } else if (value === '=') {
      handleCalculate(expression);
    } else {
      setExpression(prev => prev + value);
    }
  };

  const handlePercentage = () => {
    setExpression(prev => prev + '%');
  };

  const handleScientificInput = (value: string) => {
    if (value === 'π') {
      setExpression(prev => prev + Math.PI.toFixed(8));
    } else if (value === 'e') {
      setExpression(prev => prev + Math.E.toFixed(8));
    } else if (value === 'sqrt') {
      setExpression(prev => prev + 'Math.sqrt(');
    } else if (value === 'pow') {
      setExpression(prev => prev + '**');
    } else if (value === 'log') {
      setExpression(prev => prev + 'Math.log10(');
    } else if (value === 'ln') {
      setExpression(prev => prev + 'Math.log(');
    } else if (value === 'sin') {
      setExpression(prev => prev + 'sin(');
    } else if (value === 'cos') {
      setExpression(prev => prev + 'cos(');
    } else if (value === 'tan') {
      setExpression(prev => prev + 'tan(');
    } else {
      setExpression(prev => prev + value);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calculatorHistory');
  };

  const calcText = t('calculator');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-bg-card rounded-card shadow-md p-4">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-semibold text-text-primary">{calcText.title}</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowScientific(!showScientific)}
                  className={`px-4 py-2 text-sm rounded-btn transition-all ${
                    showScientific ? 'bg-primary text-white' : 'bg-bg-tertiary text-text-secondary hover:bg-gray-200'
                  }`}
                >
                  {calcText.scientific}
                </button>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className={`px-4 py-2 text-sm rounded-btn transition-all ${
                    showHistory ? 'bg-primary text-white' : 'bg-bg-tertiary text-text-secondary hover:bg-gray-200'
                  }`}
                >
                  {calcText.history}
                </button>
              </div>
            </div>

            <CalculatorDisplay expression={expression} result={result} />

            {showScientific && <ScientificPanel onInput={handleScientificInput} />}

            <CalculatorKeypad onInput={handleInput} />
          </div>

          
        </div>

        {showHistory && (
          <div className="w-80">
            <HistoryPanel history={history} onClear={clearHistory} />
          </div>
        )}
      </div>
    </div>
  );
}
