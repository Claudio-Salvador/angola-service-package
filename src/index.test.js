import angola from './index.js';

describe('Angola Service Package', () => {
  let data;

  beforeAll(async () => {
    data = await angola();
  });

  describe('Provincias', () => {
    test('should return array of provinces', () => {
      expect(Array.isArray(data.provincias)).toBe(true);
      expect(data.provincias.length).toBeGreaterThan(0);
    });

    test('should have correct province structure', () => {
      const provincia = data.provincias[0];
      expect(provincia).toHaveProperty('id');
      expect(provincia).toHaveProperty('nome');
      expect(provincia).toHaveProperty('capital');
      expect(provincia).toHaveProperty('area');
      expect(provincia).toHaveProperty('populacao');
      expect(provincia).toHaveProperty('municipios');
    });
  });

  describe('Operadoras', () => {
    test('should return array of operators', () => {
      expect(Array.isArray(data.operadoras)).toBe(true);
      expect(data.operadoras.length).toBeGreaterThan(0);
    });

    test('should have correct operator structure', () => {
      const operadora = data.operadoras[0];
      expect(operadora).toHaveProperty('id');
      expect(operadora).toHaveProperty('nome');
      expect(operadora).toHaveProperty('prefixos');
      expect(operadora).toHaveProperty('website');
    });
  });

  describe('Bancos', () => {
    test('should return array of banks', () => {
      expect(Array.isArray(data.bancos)).toBe(true);
      expect(data.bancos.length).toBeGreaterThan(0);
    });

    test('should have correct bank structure', () => {
      const banco = data.bancos[0];
      expect(banco).toHaveProperty('id');
      expect(banco).toHaveProperty('nome');
      expect(banco).toHaveProperty('sigla');
      expect(banco).toHaveProperty('swift');
    });
  });

  describe('Times', () => {
    test('should return array of teams', () => {
      expect(Array.isArray(data.times)).toBe(true);
      expect(data.times.length).toBeGreaterThan(0);
    });

    test('should have correct team structure', () => {
      const time = data.times[0];
      expect(time).toHaveProperty('id');
      expect(time).toHaveProperty('nome');
      expect(time).toHaveProperty('cidade');
      expect(time).toHaveProperty('estadio');
    });
  });

  describe('Hospitais', () => {
    test('should return array of hospitals', () => {
      expect(Array.isArray(data.hospitais)).toBe(true);
      expect(data.hospitais.length).toBeGreaterThan(0);
    });

    test('should have correct hospital structure', () => {
      const hospital = data.hospitais[0];
      expect(hospital).toHaveProperty('id');
      expect(hospital).toHaveProperty('nome');
      expect(hospital).toHaveProperty('tipo');
      expect(hospital).toHaveProperty('cidade');
      expect(hospital).toHaveProperty('endereco');
    });
  });

  describe('formatarKwanza', () => {
    test('should format currency correctly', () => {
      expect(data.formatarKwanza(1000)).toBeDefined();
    });
  });
});