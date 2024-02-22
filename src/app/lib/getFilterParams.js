function extractValueFromString(obj) {
  return obj.paramValue.split(' ')[0];
}

function formatObject(arr) {
  return arr.map((obj) => {
    if (obj.paramValue.includes('грн')) {
      obj.paramValue = extractValueFromString(obj);
    }
    return obj;
  });
}

export const generateQueryString = (arr) => {
  const formattedArr = formatObject(arr);
  const params = {};
  formattedArr.forEach((obj) => {
    if (obj.paramValueEng) {
      const paramName = obj.paramNameEng;
      const paramValue = obj.paramValueEng;
      if (params[paramName]) {
        params[paramName].push(paramValue);
      } else {
        params[paramName] = [paramValue];
      }
    } else if (obj.paramValue) {
      params[obj.paramValue] = true;
    }
  });

  const queryString = Object.entries(params)
    .map(([paramName, paramValues]) => {
      if (Array.isArray(paramValues)) {
        const paramValueString = paramValues.join(',');
        return `${paramName}=${paramValueString}`;
      } else {
        return paramName;
      }
    })
    .join('&');

  return queryString;
};
