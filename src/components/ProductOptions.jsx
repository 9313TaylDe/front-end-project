import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import "../css/Product.css";

const ProductsListing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOptions = () => setIsOpen(!isOpen);
  const [products, setProducts] = useState([]); // Todos os produtos
  const [filteredProducts, setFilteredProducts] = useState([]); // Produtos filtrados
  const [totalProdutos, setTotalProdutos] = useState(0); // Total de produtos
  const [selectedBrand, setSelectedBrand] = useState(""); // Marca selecionada
  const [selectCategory, setSelectedCategory] = useState("");
  // Efeito para carregar os produtos ao montar o componente
  useEffect(() => {
    axios
      .get("http://localhost:3000/products") // Atualizar a URL conforme a sua API
      .then((response) => {
        setProducts(response.data); // Atualiza o estado com todos os produtos
        setFilteredProducts(response.data); // Inicialmente, exibe todos os produtos
        contarProdutos(response.data); // Atualiza o total de produtos
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
      });
  }, []);

  // Função para contar e atualizar o total de produtos
  function contarProdutos(produtos) {
    setTotalProdutos(produtos.length);
  }

  // Função para lidar com mudanças na marca selecionada
  // Estado atualizado para suportar múltiplas marcas
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Função para lidar com mudanças na marca selecionada
  const handleChangeBrand = (event) => {
    const brand = event.target.id; // Pega o ID do checkbox selecionado
    const isChecked = event.target.checked; // Verifica se foi marcado ou desmarcado

    let updatedBrands;

    if (isChecked) {
      // Adiciona a marca ao array se estiver marcada
      updatedBrands = [...selectedBrands, brand];
    } else {
      // Remove a marca do array se estiver desmarcada
      updatedBrands = selectedBrands.filter((item) => item !== brand);
    }

    setSelectedBrands(updatedBrands);

    // Aplica o filtro ou exibe todos os produtos
    if (updatedBrands.length > 0) {
      const filtered = products.filter((produto) =>
        updatedBrands.includes(produto.brand.toLowerCase())
      );
      setFilteredProducts(filtered);
      contarProdutos(filtered); // Atualiza o total com os produtos filtrados
    } else {
      setFilteredProducts(products); // Exibe todos os produtos se nenhuma marca estiver selecionada
      contarProdutos(products);
    }
  };

  const handleChangeCategory = (event) => {
    const category = event.target.id;
    selectCategory(category);

    if (category) {
      const filtered = products.filter(
        (produto) => produto.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
      contarProdutos(filtered);
    } else {
      setFilteredProducts(products);
      contarProdutos(products);

      setProducts;
    }
  };

  return (
    <div className="container-productslisting mt-2 mb-2 ">
      <div className="containerpai-opcoes">
        <section className="container-opcoes">
          <h2>Marcas</h2>
          <div className="opcoes1">
            <div className="container-labelinput">
              <input type="checkbox" name="adidas" id="adidas" />
              <label htmlFor="adidas">Adidas</label>
            </div>
            <div className="container-labelinput">
              <input
                type="checkbox"
                name="balenciaga"
                id="balenciaga"
                htmlFor="balenciaga"
              />
              <label htmlFor="sweaters">Balenciaga </label>
            </div>
            <div className="container-labelinput">
              <input type="checkbox" name="k-swiss" id="k-swiss" />
              <label htmlFor="k-swiss">K-Swiss</label>
            </div>
            <div className="container-labelinput">
              <input
                type="checkbox"
                name="nike"
                value="nike"
                onClick={handleChangeBrand}
                id="nike"
              />
              <label htmlFor="nike" onClick={handleChangeBrand}>
                Nike
              </label>
            </div>
            <div className="container-labelinput">
              <input type="checkbox" name="puma" id="puma" />
              <label htmlFor="puma">Puma</label>
            </div>
          </div>
          <h2>Categoria</h2>
          <div className="opcoes2">
            <div className="container-labelinput">
              <input type="checkbox" name="casual" id="casual" />
              <label htmlFor="casual">Casual</label>
            </div>

            <div className="container-labelinput">
              <input type="checkbox" name="utilitario" id="utilitario" />
              <label htmlFor="utilitario">Utilitário</label>
            </div>
            <div className="container-labelinput">
              <input type="checkbox" name="corrida" id="corrida" />
              <label htmlFor="corrida">Corrida</label>
            </div>
          </div>
          <h2>Gênero</h2>
          <div className="opcoes3">
            <div className="container-labelinput">
              <input type="checkbox" name="masculino" id="masculino" />
              <label htmlFor="masculino">Masculino</label>
            </div>
            <div className="container-labelinput">
              <input type="checkbox" name="feminino" id="feminino" />
              <label htmlFor="feminino">Feminino</label>
            </div>
            <div className="container-labelinput">
              <input type="checkbox" name="unissex" id="unissex" />
              <label htmlFor="unissex">Unissex</label>
            </div>
          </div>
          <div className="opcoes4">
            <h2>Estados</h2>
            <div className="container-labelinput">
              <div className="custom-checkbox" id="novo" />
              <label htmlFor="novo">Novo</label>
            </div>
            <div className="container-labelinput">
              <div className="custom-checkbox" id="usado" />
              <label htmlFor="usado">Usado</label>
            </div>
          </div>
        </section>
      </div>
      <div className="containerpai-menu-mobile-options  relative w-full">
        <div className="menu-mobile-options absolute">
          {!isOpen ? (
            <>
              <i className="pi pi-times" onClick={toggleOptions}></i>
              <section className="container-opcoes">
                <h2>Marcas</h2>
                <div className="opcoes1">
                  <div className="container-labelinput">
                    <input type="checkbox" name="adidas" id="adidas" />
                    <label htmlFor="adidas">Adidas</label>
                  </div>
                  <div className="container-labelinput">
                    <input
                      type="checkbox"
                      name="balenciaga"
                      id="balenciaga"
                      htmlFor="balenciaga"
                    />
                    <label htmlFor="sweaters">Balenciaga </label>
                  </div>
                  <div className="container-labelinput">
                    <input type="checkbox" name="k-swiss" id="k-swiss" />
                    <label htmlFor="k-swiss">K-Swiss</label>
                  </div>
                  <div className="container-labelinput">
                    <input
                      type="checkbox"
                      name="nike"
                      value="nike"
                      onClick={handleChangeBrand}
                      id="nike"
                    />
                    <label htmlFor="nike" onClick={handleChangeBrand}>
                      Nike
                    </label>
                  </div>
                  <div className="container-labelinput">
                    <input type="checkbox" name="puma" id="puma" />
                    <label htmlFor="puma">Puma</label>
                  </div>
                </div>
                <h2>Categoria</h2>
                <div className="opcoes2">
                  <div className="container-labelinput">
                    <input type="checkbox" name="casual" id="casual" />
                    <label htmlFor="casual">Casual</label>
                  </div>

                  <div className="container-labelinput">
                    <input type="checkbox" name="utilitario" id="utilitario" />
                    <label htmlFor="utilitario">Utilitário</label>
                  </div>
                  <div className="container-labelinput">
                    <input type="checkbox" name="corrida" id="corrida" />
                    <label htmlFor="corrida">Corrida</label>
                  </div>
                </div>
                <h2>Gênero</h2>
                <div className="opcoes3">
                  <div className="container-labelinput">
                    <input type="checkbox" name="masculino" id="masculino" />
                    <label htmlFor="masculino">Masculino</label>
                  </div>
                  <div className="container-labelinput">
                    <input type="checkbox" name="feminino" id="feminino" />
                    <label htmlFor="feminino">Feminino</label>
                  </div>
                  <div className="container-labelinput">
                    <input type="checkbox" name="unissex" id="unissex" />
                    <label htmlFor="unissex">Unissex</label>
                  </div>
                </div>
                <div className="opcoes4">
                  <h2>Estado</h2>
                  <div className="container-labelinput">
                    <div className="custom-checkbox" id="novo" />
                    <label htmlFor="novo">Novo</label>
                  </div>
                  <div className="container-labelinput">
                    <div className="custom-checkbox" id="usado" />
                    <label htmlFor="usado">Usado</label>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <i onClick={toggleOptions} className="pi pi-filter icon-filter"></i>
          )}
        </div>
      </div>
      <section className="container-listingproducts flex flex-wrap ">
        <div className="container-ordena-e-total flex">
          <h2 className="total-products">
            Resultados para "Tênis" - {totalProdutos}
          </h2>{" "}
          <div className="combobox-container">
            <label htmlFor="options" className="combobox-label">
              Ordenar por:
            </label>
            <select
              id="options"
              className="combobox"
              value={selectedBrand}
              onChange={handleChangeBrand}
            >
              <option className="titulo-central-cbobox" value="" disabled>
                Selecione uma opção
              </option>
              <option value="categoria">Categoria</option>
              <option value="nike">Nike</option>
              <option value="tamanho">Tamanho</option>
              <option value="popularidade">Popularidade</option>
              <option value="mais_recente">Mais Recente</option>
            </select>
          </div>
        </div>
        <Products products={filteredProducts} />
      </section>
    </div>
  );
};

export default ProductsListing;
