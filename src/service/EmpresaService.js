import axios from "axios";

export class EmpresaService {
  getEmpresas() {
    return axios.get("http://localhost:9090/api/v1.0/empresa")
      .then((res) => res.data.result);
  }

  postEmpresas(emp) {
    return axios.post("http://localhost:9090/api/v1.0/empresa", emp);
  }

  putEmpresas(empres) {
    return axios.put("http://localhost:9090/api/v1.0/empresa", empres);
  }
}

export const getEmpresas = () => {
  return axios.get("http://localhost:9090/api/v1.0/empresa")
    .then((res) => res.data);
};
export const getEmpresa = (id) => {
  return axios.get("http://localhost:9090/api/v1.0/empresa/" + id)
    .then((res) => res.data);
};

export const postEmpresa = (emp) => {
  return axios.post("http://localhost:9090/api/v1.0/empresa", emp);
};

export const putEmpresas = (id, empres) => {
  return axios.put("http://localhost:9090/api/v1.0/empresa/" + id, empres);
};
export const postEmpresaUser = (empresa) => {
  return axios.post("http://localhost:9090/api/v1.0/empresaUser", empresa);
};
