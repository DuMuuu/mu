// get   //  /api/data
import data from "@/database/data1";
export default defineEventHandler(() => {
  return {
    status: 200,
    data: data,
  };
});
