'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

type UnitCategory = 'length' | 'weight' | 'temperature' | 'area' | 'volume';

interface ConversionUnit {
  label: string;
  value: number;
}

interface UnitConversion {
  [key: string]: {
    units: ConversionUnit[];
    baseUnit: string;
  };
}

const unitConversions: UnitConversion = {
  length: {
    units: [
      { label: 'meters', value: 1 },
      { label: 'kilometers', value: 1000 },
      { label: 'centimeters', value: 0.01 },
      { label: 'millimeters', value: 0.001 },
      { label: 'miles', value: 1609.344 },
      { label: 'yards', value: 0.9144 },
      { label: 'feet', value: 0.3048 },
      { label: 'inches', value: 0.0254 },
    ],
    baseUnit: 'm',
  },
  weight: {
    units: [
      { label: 'kilograms', value: 1 },
      { label: 'grams', value: 0.001 },
      { label: 'milligrams', value: 0.000001 },
      { label: 'pounds', value: 0.453592 },
      { label: 'ounces', value: 0.0283495 },
    ],
    baseUnit: 'kg',
  },
  temperature: {
    units: [
      { label: 'celsius', value: 0 },
      { label: 'fahrenheit', value: 0 },
      { label: 'kelvin', value: 0 },
    ],
    baseUnit: '°C',
  },
  area: {
    units: [
      { label: 'squareMeters', value: 1 },
      { label: 'squareKilometers', value: 1000000 },
      { label: 'squareFeet', value: 0.092903 },
      { label: 'acres', value: 4046.86 },
      { label: 'hectares', value: 10000 },
    ],
    baseUnit: 'm²',
  },
  volume: {
    units: [
      { label: 'liters', value: 1 },
      { label: 'milliliters', value: 0.001 },
      { label: 'cubicMeters', value: 1000 },
      { label: 'gallonsUs', value: 3.78541 },
      { label: 'gallonsUk', value: 4.54609 },
      { label: 'fluidOunces', value: 0.0295735 },
    ],
    baseUnit: 'L',
  },
};

const categoryKeys: UnitCategory[] = ['length', 'weight', 'temperature', 'area', 'volume'];

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('0');
  const [toUnit, setToUnit] = useState('5');
  const [result, setResult] = useState('');
  const { t } = useTranslation();

  const converterText = t('converter');
  const categories = categoryKeys.map(key => ({
    key,
    label: converterText.categories[key as keyof typeof converterText.categories],
  }));

  const conversion = unitConversions[category];
  const units = conversion.units.map(unit => ({
    ...unit,
    displayLabel: (converterText.units as any)[category]?.[unit.label] || unit.label,
  }));

  useEffect(() => {
    if (!value) {
      setResult('');
      return;
    }

    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult('Invalid');
      return;
    }

    const fromUnitData = units[parseInt(fromUnit)];
    const toUnitData = units[parseInt(toUnit)];

    let convertedValue: number;

    if (category === 'temperature') {
      convertedValue = convertTemperature(numValue, fromUnitData.displayLabel, toUnitData.displayLabel);
    } else {
      const baseValue = numValue * fromUnitData.value;
      convertedValue = baseValue / toUnitData.value;
    }

    const formattedResult =
      Number.isInteger(convertedValue)
        ? convertedValue.toString()
        : convertedValue.toFixed(6).replace(/\.?0+$/, '');

    setResult(formattedResult);
  }, [value, fromUnit, toUnit, category, units]);

  const convertTemperature = (value: number, from: string, to: string): number => {
    let celsius: number;

    if (from.includes('Celsius')) {
      celsius = value;
    } else if (from.includes('Fahrenheit')) {
      celsius = (value - 32) * (5 / 9);
    } else {
      celsius = value - 273.15;
    }

    if (to.includes('Celsius')) {
      return celsius;
    } else if (to.includes('Fahrenheit')) {
      return (celsius * 9 / 5) + 32;
    } else {
      return celsius + 273.15;
    }
  };

  return (
    <div className="bg-bg-card rounded-card shadow-md p-6">
      <h2 className="text-2xl font-semibold text-text-primary mb-6">{converterText.title}</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {converterText.category}
        </label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as UnitCategory);
            setFromUnit('0');
            setToUnit('1');
            setValue('');
            setResult('');
          }}
          className="w-full px-4 py-3 border border-border rounded-btn text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {categories.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {converterText.value}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={converterText.enterValue}
          className="w-full px-4 py-3 border border-border rounded-btn text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {converterText.from}
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-btn text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {units.map((unit, index) => (
              <option key={index} value={index}>
                {unit.displayLabel}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {converterText.to}
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-btn text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {units.map((unit, index) => (
              <option key={index} value={index}>
                {unit.displayLabel}
              </option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <div className="bg-bg-tertiary rounded-btn p-6">
          <p className="text-sm text-text-tertiary mb-2">{converterText.result}</p>
          <p className="text-3xl font-mono text-text-primary">{result}</p>
          <p className="text-sm text-text-secondary mt-2">
            {units[parseInt(toUnit)].displayLabel}
          </p>
        </div>
      )}
    </div>
  );
}
