const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5080";

export async function fetchCourses({ nome, categoria, modalidade, status }) {
  const params = new URLSearchParams();
  if (nome?.trim()) params.set("nome", nome.trim());
  if (categoria) params.set("categoria", categoria);
  if (modalidade) params.set("modalidade", modalidade);
  if (status) params.set("status", status);

  const res = await fetch(`${API_URL}/api/courses?${params.toString()}`);
  if (!res.ok) throw new Error(`Falha ao consultar a API (HTTP ${res.status}).`);
  return res.json(); // { total, courses }
}

export async function fetchCourseById(id) {
  const res = await fetch(`${API_URL}/api/courses/${id}`);
  if (res.status === 404) throw new Error("Curso não encontrado.");
  if (!res.ok) throw new Error(`Falha ao carregar o curso (HTTP ${res.status}).`);
  return res.json();
}

export async function fetchMeta() {
  const res = await fetch(`${API_URL}/api/meta`);
  if (!res.ok) throw new Error("Falha ao carregar os filtros.");
  return res.json(); // { categorias, modalidades, status }
}
