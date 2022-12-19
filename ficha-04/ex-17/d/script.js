/* eslint
func-names: "off",
no-alert: "off",
no-undef: "off",
operator-linebreak: "off"
*/

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
