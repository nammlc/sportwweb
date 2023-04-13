const time = document.getElementById('getTime');

const date = new Date();

const stringdate = date.getUTCFullYear() + '/' +( date.getUTCMonth() + 1) +  '/' + date.getUTCDate() + ' ' + (date.getUTCHours() + 7) + ':' + date.getUTCMinutes() +' GMT + 7';

time.innerHTML = `${stringdate}`; 