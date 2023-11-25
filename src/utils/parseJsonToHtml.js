const parseJsonToHtml = (desc) => {
  return <div dangerouslySetInnerHTML={{__html : desc}}/>;
};

export default parseJsonToHtml;