import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: 'nbentos',
  api_key: '855887183882631',
  api_secret: 'j14-WUxmPxS1_8Cl3D5b0a7SkAE',
});

describe('Pruebas en fileUpload.js', () => {

  test('should de cargar un archivo y retornar el URL', async() => {
    const resp = await fetch(
      'https://images.prismic.io/smallexchange-com/21260cc6-c545-4571-8f59-cd96052b327e_SMFE_Site_Buttons-SMALL%403x.png?auto=compress,format'
    );
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
    // Borrar imagen por Id
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
     

    await cloudinary.v2.api.delete_resources(imageId, {}, () => { 
      console.log('borre pa buena'); 
    });
  });
  
  test('should de retornar un error', async () => {
  

    const file = new File([], 'foto.png');

    const url = await fileUpload(file);

    expect( url ).toBe(null);
  });
  
})
