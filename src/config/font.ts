type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const SarabunFont = {
  regular: 'Sarabun-Regular',
  medium: 'Sarabun-Medium',
  light: 'Sarabun-Light',
  thin: 'Sarabun-Thin',
  bold: 'Sarabun-Bold',
};

const fontWeight = (family: string): FontWeight => {
  if (family == 'bold') {
    return 'bold';
  }
  if (family == 'medium') {
    return '600';
  }
  if (family == 'regular') {
    return '500';
  }
  if (family == 'light') {
    return '300';
  }
  if (family == 'thin') {
    return '100';
  }
  return 'normal';
};

export const GetSarabunFont = (
  family: 'regular' | 'medium' | 'light' | 'thin' | 'bold',
): {
  fontFamily: string;
  fontWeight: FontWeight;
} => {
  return {
    fontFamily: SarabunFont[family],
    fontWeight: fontWeight(family),
  };
};
