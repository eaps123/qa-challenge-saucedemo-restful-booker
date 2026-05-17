Feature: Checkout

  Background:
    Given que estou logado na aplicação
  
  @smoke
  Scenario: Compra realizada com sucesso
    When adiciono um produto ao carrinho
    And vou para o carrinho
    And finalizo a compra com dados válidos
    Then devo ver a confirmação de compra

  @negative
  Scenario: Checkout com dados inválidos
    When adiciono um produto ao carrinho
    And vou para o carrinho
    And finalizo a compra sem preencher dados obrigatórios
    Then devo ver uma mensagem de erro no checkout

  Scenario: Carrinho vazio
    When acesso o carrinho sem produtos
    And tento finalizar a compra
    Then devo ver uma mensagem de carrinho vazio

  Scenario: Adicionar múltiplos produtos
    When adiciono múltiplos produtos ao carrinho
    Then o carrinho deve refletir "2" produtos

  Scenario: Remover produto do carrinho
    When adiciono um produto ao carrinho
    And vou para o carrinho
    And removo o produto do carrinho
    Then o carrinho deve ficar vazio

  Scenario: Ordenar produtos por menor preço
    When ordeno os produtos por "lohi"
    Then os produtos devem ser ordenados corretamente