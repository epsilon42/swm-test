const MissingTemplate = ({ content }) => {
  console.log(
    `%cError: Block template "${content.kind}" doesn't exist`,
    `background: red; color: white`
  );
  return null;
};

export default MissingTemplate;
