export const handleErrors = (error: any) => {
    if (error.response) {
      console.log("ОЙ ОШИБКА В ЗАПРОСЕ", error.response.status);
      console.log("ОЙ ОШИБКА В ЗАПРОСЕ", error.response.data);
      console.log("если подробно, то ....", error.toJSON());
    }
  };