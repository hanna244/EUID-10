function init() {
  var domNodes = findDomNodes();

  updateHeadlineContent(domNodes.headline, '중단점은 어떻게 사용하나요?');
  updateDescriptionHTML(
    domNodes.description,
    '<a href="https://developer.mozilla.org/ko/docs/Tools/How_to/Set_a_breakpoint" target="_blank" rel="noopener noreferrer">Set a breakpoint</a> 문서 내용을 읽고 실습해보세요.'
  );
}

function findDomNodes() {
  return {
    headline: getNode('.headline'),
    description: getNode('.description'),
  };
}

function getNode(selector, context) {
  return (context || document).querySelector(selector);
}

function updateHeadlineContent(headlineNode, newContent) {
  headlineNode.textContent = newContent;
}

function updateDescriptionHTML(descriptionNode, newHTML) {
  descriptionNode.innerHTML = newHTML;
}

window.addEventListener('DOMContentLoaded', init);
