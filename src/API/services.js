import axios from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

const getService = async (url) => {
	try {
		const res = await axiosInstance.get(url);
		return res.data;
	} catch (error) {
		return error;
	}
};

const useAPI = (method, url) => {
	const [res, setRes] = useState({
		loading: true,
		data: {},
		error: undefined,
	});

	const serviceMethod = {
		GET: getService,
	}[method];

	const requestData = async (reqData) => {
		setRes((prevState) => ({ ...prevState, loading: true }));

		try {
			const endpoint = reqData && reqData.id ? `${url}/${reqData.id}` : url;
			const data = reqData && reqData.data ? reqData.data : null;

			const resData = await serviceMethod(endpoint, data);

			setRes((prevState) => ({ ...prevState, loading: false, data: resData }));
		} catch (error) {
			setRes((prevState) => ({ ...prevState, loading: false, error: error }));
		}
	};

	return [res, requestData];
};

export { useAPI };
