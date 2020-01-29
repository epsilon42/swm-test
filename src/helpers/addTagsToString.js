export const addTagsToString = content => {
  let tagsToApply = []; // Initialise array
  let stringAsChars = [...content.text]; // Convert text into an array of single characters

  // List of intention types and corresponding html tag
  const IntentTypes = {
    emphasized: "em",
    important: "strong",
    default: ""
  };

  // Update tagsToApply with list of open/close html elements along with index position of where it belongs in string
  // Example result of forEach below:
  // [
  //   ["<em>", 0 ],
  //   ["</em>", 11 ]
  //   ["<strong>", 28 ]
  //   ["</strong>", 55 ]
  // ]
  content.intentions.forEach(({ kind, index, length }) => {
    if (index + length <= content.text.length) {
      if (IntentTypes[kind]) {
        tagsToApply.push([`<${IntentTypes[kind]}>`, index]);
        tagsToApply.push([`</${IntentTypes[kind]}>`, index + length]);
      }
    }
  });

  // Reverse sort by position in string (to accomodate for html tags being placed in wrong positions when multiple intentions are defined)
  tagsToApply.sort((a, b) => b[1] - a[1]);

  // Insert html tags into string character array
  tagsToApply.forEach(item => {
    stringAsChars.splice(item[1], 0, item[0]);
  });

  // Join character array to new string with html tags included
  return stringAsChars.join("");
};
