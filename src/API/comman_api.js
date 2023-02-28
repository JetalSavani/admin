import Request, {
  ApiHelperPost,
  ApiHelperGet,
  ApiHelperPostWithoutHeader,
} from ".";
import { ApiRoutes } from "../Constants";

const getCatagory = async () => {
  try {
    console.error("=================");
    const res = await ApiHelperGet(ApiRoutes.GETCATAGORY);
    return res?.data;
  } catch (error) {
    throw error;
  }
};
const getSubCatagory = async (c_id) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETSUBCATAGORY + `/${c_id}`);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const insertSubcatagory = async (formData) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTSUBCATAGORY, formData);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const insertCatagory = async (formData) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTCATAGORY, formData);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const insertSubscription = async (formData) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTSUBSCRIPTION, formData);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const getColor = async () => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETCOLOR);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const insertProduct = async (formData) => {
  try {
    const res = await ApiHelperPostWithoutHeader(
      ApiRoutes.INSERTPRODUCT,
      formData
    );
    return res?.data;
  } catch (error) {
    throw error;
  }
};
const insertColor = async (formData) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTCOLOR, formData);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

const getProduct = async () => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETPRODUCT);
    return res?.data;
  } catch (error) {
    throw error;
  }
};
// const insertSize = async (formData) => {
//   try {
//     const res = await ApiHelperPost(ApiRoutes.INSERTSIZE, formData);
//     return res?.data;
//   } catch (error) {
//     throw error;
//   }
// };
// const getSize = async () => {
//   try {
//     const res = await ApiHelperGet(ApiRoutes.GETSIZE);
//     return res?.data;
//   } catch (error) {
//     throw error;
//   }
// };
export {
  getCatagory,
  insertCatagory,
  insertSubcatagory,
  insertSubscription,
  insertProduct,
  getColor,
  getSubCatagory,
  insertColor,
  getProduct,
  // getSize,
  // insertSize,
};
