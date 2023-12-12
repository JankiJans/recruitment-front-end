import custom from './custom';

window.addEventListener('load', () => {
  try {
    custom();
  } catch (error) {
    console.error('Error in custom function:', error);
  }
});
