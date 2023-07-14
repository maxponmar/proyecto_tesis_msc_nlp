export const editorHeaderModules = {
  toolbar: [
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ['normal'] }],
    // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    // [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    // [
    //   {
    //     color: ['black', 'red', 'blue', 'yellow'],
    //   },
    //   {
    //     background: ['black', 'red', 'blue', 'yellow'],
    //   },
    // ],
  ],
};

export const analyseOptionParameters = [
  {
    section: 'HIPOTESIS',
    density: { LSL: 0.5235, USL: 0.6603 },
    sophistication: { LSL: 0.5167, USL: 0.7211 },
    variety: { LSL: 0.8881, USL: 0.9855 },
  },
  {
    section: 'JUSTIFICACION',
    density: { LSL: 0.5347, USL: 0.6013 },
    sophistication: { LSL: 0.5326, USL: 0.6326 },
    variety: { LSL: 0.5968, USL: 0.761 },
  },
  {
    section: 'OBJETIVOS',
    density: { LSL: 0.5569, USL: 0.7193 },
    sophistication: { LSL: 0.5577, USL: 0.7535 },
    variety: { LSL: 0.8516, USL: 0.9858 },
  },
  {
    section: 'PLANTEAMIENTO DEL PROBLEMA',
    density: { LSL: 0.5585, USL: 0.6293 },
    sophistication: { LSL: 0.5384, USL: 0.6668 },
    variety: { LSL: 0.5571, USL: 0.7047 },
  },
  {
    section: 'PREGUNTAS DE INVESTIGACION',
    density: { LSL: 0.6043, USL: 0.7443 },
    sophistication: { LSL: 0.5766, USL: 0.7742 },
    variety: { LSL: 0.8885, USL: 1 },
  },
  {
    section: 'METODOLOGIA',
    density: { LSL: 0.49, USL: 0.6195 },
    sophistication: { LSL: 0.5601, USL: 0.7141 },
    variety: { LSL: 0.5211, USL: 0.6508 },
  },
  {
    section: 'CONCLUSIONES',
    density: { LSL: 0.5536, USL: 0.5843 },
    sophistication: { LSL: 0.5504, USL: 0.6062 },
    variety: { LSL: 0.5537, USL: 0.6477 },
  },
];
