import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Timeline from './ui/timeline';

console.log("test");
//create a tooltip
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
     const instance = new Tooltip(tooltip);
     instance.init();
})

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
     const instance = new Dropdown(dropdown);
     instance.init();
})

// create timeline
const timeline = new Timeline(document.querySelector('.timeline'));