// Takes a value of type responsiveAligType and normalizes it to Flexbox compatible values.
export const normalizeAlign = align => {
  const alignments = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };
  if (Array.isArray(align)) {
    return align.map(alignment => alignments[alignment]);
  }
  return alignments[align];
};
