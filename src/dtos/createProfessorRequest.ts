interface createProfessorRequest {
  id: string;
  name: string;
  lastname: string;
  mothername?: string;
  code: string;
  email: string;
  phone: string;
  degree: string;
}

export default createProfessorRequest;
