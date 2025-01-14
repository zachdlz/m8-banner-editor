const BANNERS = {
  m8: [
    {
      index: 1,
      inputs: [
        {
          id: 'username',
          type: 'text',
          font: 'TuskerGrotesk',
          color: '#1e1d1e',
          xMultiplier: 0.778,
          yMultiplier: 0.34,
          fontSizeMultiplier: 0.045,
        },
        { id: 'role', type: 'text' },
        {
          id: 'supporter-level',
          type: 'select',
          default: 'ultra',
          options: [
            { value: 'ultra', label: 'Ultra' },
            { value: 'supporter', label: 'Supporter' },
            { value: 'fan', label: 'Fan' },
          ],
        },
      ],
    },
  ],
  zhaak: [
    {
      index: 1,
      inputs: [
        {
          id: 'username',
          type: 'text',
          font: 'DharmaGothic',
          color: '#000000',
          xMultiplier: 0.652,
          yMultiplier: 0.48,
          fontSizeMultiplier: 0.08,
          fontSizeFixed: true,
        },
      ],
    },
  ],
};

export default BANNERS;
