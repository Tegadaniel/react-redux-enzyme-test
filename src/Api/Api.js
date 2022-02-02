export const Api = () => {
  return fetch(
    `https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Something went wrong while requesting the data");
  });
};
