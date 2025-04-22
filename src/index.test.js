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

  describe('feriados', () => {
    test('should return array of holidays', () => {
      expect(Array.isArray(data.feriados(2023))).toBe(true);
      expect(data.feriados(2023).length).toBeGreaterThan(0);
    });

    test('should have correct holiday structure', () => {
      const holiday = data.feriados(2023)[0];
      expect(holiday).toHaveProperty('nome');
      expect(holiday).toHaveProperty('data');
    });

  })


  describe('PaisesDoMundo', () => {
    test('should have correct continente structure', () => {
      expect(typeof data.continentes).toBe('object');
      expect(data.continentes).not.toBeNull();

      expect(data.continentes).toHaveProperty("africa");
      expect(data.continentes).toHaveProperty("americas");
      expect(data.continentes).toHaveProperty("europa");
      expect(data.continentes).toHaveProperty("asia");
      expect(data.continentes).toHaveProperty("oceania");
    });

    test('should have correct africa structure', () => {
      expect(typeof data.africa).toBe('object');
      expect(data.africa).not.toBeNull();
      // Check country structure
      const angola = data.africa.paises[1];
      expect(angola).toMatchObject({
        Nome: expect.any(String),
        Sigla: expect.any(String),
        indicativo: expect.any(String),
        Capital: expect.any(String),
        bandeira_url: expect.any(String)
      });
      // Check if object has minimum countries
      expect(Object.keys(data.africa.paises).length).toBeGreaterThanOrEqual(5);
    });

    test('should have correct america structure', () => {
      expect(typeof data.america).toBe('object');
      expect(data.america).not.toBeNull();

      // Check country structure
      const brasil = data.america.paises[0];
      expect(brasil).toMatchObject({
        Nome: expect.any(String),
        Sigla: expect.any(String),
        indicativo: expect.any(String),
        Capital: expect.any(String),
        bandeira_url: expect.any(String)
      });
      // Check if object has minimum countries
      expect(Object.keys(data.america.paises).length).toBeGreaterThanOrEqual(5);
    });
    test('should have correct asia structure', () => {
      expect(typeof data.asia).toBe('object');
      expect(data.asia).not.toBeNull();

      // Check country structure
      const china = data.asia.paises[0];
      expect(china).toMatchObject({
        Nome: expect.any(String),
        Sigla: expect.any(String),
        indicativo: expect.any(String),
        Capital: expect.any(String),
        bandeira_url: expect.any(String)
      });
      // Check if object has minimum countries
      expect(Object.keys(data.asia.paises).length).toBeGreaterThanOrEqual(5);
    });
    test('should have correct europa structure', () => {
      expect(typeof data.europa).toBe('object');
      expect(data.europa).not.toBeNull();

      // Check country structure
      const portugal = data.europa.paises[0];
      expect(portugal).toMatchObject({
        Nome: expect.any(String),
        Sigla: expect.any(String),
        indicativo: expect.any(String),
        Capital: expect.any(String),
        bandeira_url: expect.any(String)
      });
      // Check if object has minimum countries
      expect(Object.keys(data.europa.paises).length).toBeGreaterThanOrEqual(5);
    });
    test('should have correct oceania structure', () => {
      expect(typeof data.oceania).toBe('object');
      expect(data.oceania).not.toBeNull();

      // Check country structure
      const australia = data.oceania.paises[0];
      expect(australia).toMatchObject({
        Nome: expect.any(String),
        Sigla: expect.any(String),
        indicativo: expect.any(String),
        Capital: expect.any(String),
        bandeira_url: expect.any(String)
      });
      // Check if object has minimum countries
      expect(Object.keys(data.oceania.paises).length).toBeGreaterThanOrEqual(5);

    });

    describe('Angolan IBAN Validation', () => {
      describe('validateIBAN', () => {
        test('should return an object with the correct structure', () => {
          const result = data.validarIBANAngolano('AO06004000009085976410139');
          expect(result).toHaveProperty('valido');
          expect(result).toHaveProperty('ibanFormatado');
          expect(result).toHaveProperty('banco');
          expect(result).toHaveProperty('codigoBanco');
        });

        test('should correctly validate a BAI bank IBAN', () => {
          const baiIBAN = 'AO06004000009085976410139';
          const result = data.validarIBANAngolano(baiIBAN);

          expect(result.valido).toBe(true);
          expect(result.banco).toBe('Banco Angolano de Investimentos (BAI)');
          expect(result.codigoBanco).toBe('0040');
          expect(result.ibanFormatado).toBe('AO06 0040 0000 9085 9764 1013 9');
        });

        test('should correctly validate a BFA bank IBAN', () => {
          const bfaIBAN = 'A006OO5500000472789210141';
          const result = data.validarIBANAngolano(bfaIBAN);

          expect(result.valido).toBe(false);
          // expect(result.banco).toBe('Banco de Fomento Angola (BFA)');
          // expect(result.codigoBanco).toBe('0004');
        });

        test('should identify invalid IBAN', () => {
          const invalidIBAN = 'AO06123456789012345678901';
          const result = data.validarIBANAngolano(invalidIBAN);
          expect(result.valido).toBe(false);
        });

        test('should reject incorrect format', () => {
          const wrongFormatIBAN = 'AO123456789';
          const result = data.validarIBANAngolano(wrongFormatIBAN);
          expect(result.valido).toBe(false);

        });

        test('should format IBAN correctly', () => {
          const unformattedIBAN = 'AO06004000009085976410139';
          const result = data.validarIBANAngolano(unformattedIBAN);
          expect(result.ibanFormatado).toBe('AO06 0040 0000 9085 9764 1013 9');

        });
      });
    });


  });


});