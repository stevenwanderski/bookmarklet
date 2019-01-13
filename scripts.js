var elem = document.querySelector('#bookmarklet');
if (elem) {
  elem.parentNode.removeChild(elem);
}

var words = document.querySelector('body')
  .textContent
  .toLowerCase()
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?"']/g, "")
  .split(/\s/)
  .filter(function(word){ return word.length > 4; });

var counts = {};

for (var i = 0; i < words.length; i++) {
  counts[words[i]] = counts[words[i]] ? counts[words[i]] + 1 : 1;
}

var sortable = [];
for (var word in counts) {
  sortable.push([word, counts[word]]);
}

sortable.sort(function(a, b) {
  return b[1] - a[1];
});

var elem = document.createElement('div');
elem.id = 'bookmarklet';
var ul = document.createElement('ul');
var h1 = document.createElement('h1');
h1.style.cssText = 'text-decoration: underline;';
h1.appendChild(document.createTextNode('Word counts with frequency!'));

var styles = [
  'font-family: Arial;',
  'position: fixed;',
  'right: 20px;',
  'bottom: 20px;',
  'width: 50%;',
  'height: 300px;',
  'background-color: #fff;',
  'padding: 20px;',
  'overflow-y: scroll;',
  'border:solid 1px #666;',
  'z-index: 9999;'
]
elem.style.cssText = styles.join('');

for (var i = 0; i < sortable.length; i++) {
  var li = document.createElement('li');
  var newContent = document.createTextNode(sortable[i][0] + ': ' + sortable[i][1]);
  li.appendChild(newContent);
  ul.appendChild(li);
}

elem.appendChild(h1);
elem.appendChild(ul);

var maxFont = 40;
var minFont = 0;
var baseFont = 12;
var maxFrequency = sortable[0][1];
var minFrequency = sortable[sortable.length - 1][1];

var cloudDiv = document.createElement('div');
cloudDiv.style.cssText = 'line-height: ' + maxFont + 'px';
var cloudH1 = document.createElement('h1');
cloudH1.style.cssText = 'text-decoration: underline;';
cloudH1.appendChild(document.createTextNode('Word cloud'));

sortable.sort(function(a, b) {
  if(a[0] < b[0]) { return -1; }
  if(a[0] > b[0]) { return 1; }
  return 0;
});

for (var i = 0; i < sortable.length; i++) {
  var frequency = sortable[i][1] / maxFrequency;
  var fontSize = (frequency * maxFont) + baseFont;

  var span = document.createElement('span');
  span.style.cssText = 'font-size: ' + fontSize + 'px; margin-right: 20px; display: inline-block;';
  var newContent = document.createTextNode(sortable[i][0]);
  span.appendChild(newContent);
  cloudDiv.appendChild(span);
}

elem.appendChild(cloudH1);
elem.appendChild(cloudDiv);

document.body.appendChild(elem);
