-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: deliverynode
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_order`
--

DROP TABLE IF EXISTS `_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int NOT NULL,
  `total` decimal(5,2) NOT NULL,
  `money` decimal(5,2) DEFAULT NULL,
  `creditcard` varchar(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `street` varchar(200) DEFAULT NULL,
  `_number` varchar(50) DEFAULT NULL,
  `neighborhood` int NOT NULL,
  `sendedToDelivery` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `neighborhood` (`neighborhood`),
  CONSTRAINT `_order_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  CONSTRAINT `_order_ibfk_2` FOREIGN KEY (`neighborhood`) REFERENCES `neighborhood` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_order`
--

LOCK TABLES `_order` WRITE;
/*!40000 ALTER TABLE `_order` DISABLE KEYS */;
INSERT INTO `_order` VALUES (1,'2020-09-17 09:39:45',2,82.53,100.00,'undefined',1,'Rua Filomena Sucupira Seca','251',3,0),(2,'2020-09-17 09:43:29',2,79.05,0.00,'Mastercard',1,'Rua Filomena Sucupira Seca','251',3,1),(3,'2020-09-18 12:56:26',5,34.25,0.00,'Hipercard',1,'Rua Alegorino Peixoto','7855',3,1),(4,'2020-09-19 10:43:40',2,81.91,0.00,'Diners',0,'Rua Filomena Sucupira Seca','251',3,1),(5,'2020-09-22 06:36:08',7,60.68,0.00,'Hipercard',0,'Rua alfredo Albuquerque','556',4,1);
/*!40000 ALTER TABLE `_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (7,'1599047621073.png'),(8,'1599051117480.png');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Arroz e Grãos'),(2,'Legumes e laticínios'),(3,'Doces, sobremesas e confeitaria'),(4,'Infantil'),(5,'Conservas e enlatados'),(6,'Frutas'),(7,'Frios e congelados'),(8,'Pratos Prontos'),(9,'Achocolatados '),(10,'Bebidas'),(11,'Biscoitos e seriais'),(12,'Integrais'),(13,'Azeites, óleos e vinagres'),(14,'Orgânicos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `orderId` int DEFAULT NULL,
  `clientName` varchar(100) DEFAULT NULL,
  `creditCard` varchar(100) DEFAULT NULL,
  `total` varchar(100) DEFAULT NULL,
  `money` varchar(100) DEFAULT NULL,
  `rest` varchar(100) DEFAULT NULL,
  `publicplace` varchar(100) DEFAULT NULL,
  `_number` varchar(20) DEFAULT NULL,
  `neighborHood` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (6,25,4,'Jully Watson','Diners','R$ 81,91','undefined','undefined','Rua Filomena Sucupira Seca','251','Mucuripe'),(7,22,5,'Carolina Alves','Hipercard','R$ 60,68','undefined','undefined','Rua alfredo Albuquerque','556','José Walter');
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  `cpf` varchar(20) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `neighborhood` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `_number` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Luiz Pereira ','lui@email.com','123','88899966655','85988445588','Henrrique Jorge','Rua Sandra Bolena',235);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `message` text NOT NULL,
  `_read` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (6,'Jurema Teles','email@email.com','85987663422','Hello! I wanted just onion and others seasons to cook my launch. But I don\'t know to use the system ',0),(8,'Cicrano Pereira da Silva','cicrano@email.com','(85)987165523','This is my last message to myself to test this functionalite',0),(9,'Tereza Cristina','tereza@email.com','85978667755','Hi admin. This is just a test ',0),(10,'Ana Luíza','ana@email.com','(85)988774455','Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',0);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `neighborhood`
--

DROP TABLE IF EXISTS `neighborhood`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `neighborhood` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `activated` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `neighborhood`
--

LOCK TABLES `neighborhood` WRITE;
/*!40000 ALTER TABLE `neighborhood` DISABLE KEYS */;
INSERT INTO `neighborhood` VALUES (1,'Meireles',1),(2,'Quintino Cunha',1),(3,'Mucuripe',1),(4,'José Walter',1),(5,'Messejana',1),(6,'Padre Andrade',1),(7,'Aldeota',1),(8,'Monte Castelo',1),(9,'Cambeba',1),(10,'Praia do Futuro',1),(11,'Test ',0);
/*!40000 ALTER TABLE `neighborhood` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `_order` int NOT NULL,
  `product` int NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `subTotal` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `_order` (`_order`),
  KEY `product` (`product`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`_order`) REFERENCES `_order` (`id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,1,26,20.39,2,40.78),(2,1,2,5.50,2,11.00),(3,1,18,1.99,2,3.98),(4,1,29,5.67,1,5.67),(5,1,14,5.99,2,11.98),(6,1,5,4.56,2,9.12),(7,2,20,8.99,1,8.99),(8,2,12,18.69,1,18.69),(9,2,13,14.99,1,14.99),(10,2,2,5.50,3,16.50),(11,2,16,3.19,4,12.76),(12,2,3,3.56,2,7.12),(13,3,20,8.99,1,8.99),(14,3,18,1.99,4,7.96),(15,3,24,4.09,2,8.18),(16,3,5,4.56,2,9.12),(17,4,36,19.80,1,19.80),(18,4,23,11.69,1,11.69),(19,4,18,1.99,1,1.99),(20,4,32,8.99,1,8.99),(21,4,5,4.56,1,4.56),(22,4,28,12.50,1,12.50),(23,4,26,20.39,1,20.39),(24,4,19,1.99,1,1.99),(25,5,20,8.99,1,8.99),(26,5,29,5.67,2,11.34),(27,5,22,6.99,2,13.98),(28,5,32,8.99,1,8.99),(29,5,9,6.70,1,6.70),(30,5,3,3.56,3,10.68);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `barcode` varchar(200) DEFAULT NULL,
  `description` text,
  `price` decimal(5,2) NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `imageName` varchar(100) DEFAULT NULL,
  `category` int NOT NULL,
  `activated` tinyint(1) DEFAULT '1',
  `stock_control` tinyint(1) DEFAULT '1',
  UNIQUE KEY `id` (`id`),
  KEY `category` (`category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Arroz Branco Longo-fino Tipo 1 Camil Todo Dia 5Kg ','4578411220012','O arroz branco Tipo 1 Camil faz parte da Linha Todo Dia, perfeita para aquelas receitas deliciosas do cotidiano. É saudável, natural e nutritiva. Ideal para quem busca diariamente inovar na cozinha sem perder o sabor caseiro, a mesa farta e o prazer de compartilhar momentos juntos com quem amamos. Boa fonte de amido, que fornece energia para as atividades corridas do dia a dia, o arroz branco tem baixo teor de gordura e é um alimento de fácil e rápida digestão. Você também sabia que, além de não conter glúten e poder ser consumido por pessoas celíacas, esse tipo de arroz tem proteína em sua composição? A proteína é um nutriente essencial para a construção e a manutenção dos músculos! Compre o seu aqui no Carrefour e tenha sempre uma refeição saborosa e nutritiva!',2.45,28,'1599047512122.jpg',1,1,1),(2,'Queijo Parmesão Ralado Vigor 100g','7487546589789','Para você que não abre mão de ter aquele almoço especial de domingo com a presença de toda a família para saborear a tradicional lasanha ou macarronada, o melhor complemento é o saboroso Queijo Parmesão Ralado 100g, da Vigor Alimentos. Além da praticidade da embalagem, o produto tem como grande virtude a fórmula com base de leite de vaca e derivados, que dão ao alimento um sabor diferenciado, único.',5.50,13,'1594465216574.jpg',2,1,1),(3,'Leite Condensado Moça Lata 395g','7458741232658','Moça é leite condensado e adoçado, obtido a partir de leite fresco, puro e integral. É um ingrediente clássico em receitas de sobremesas, mas puro também é delicioso. Além disso, é o ingrediente principal do brigadeiro e do pudim de leite condensado. Uma delícia! Moça é fabricado pela Nestlé, que é a maior empresa mundial de alimentos e bebidas. Atualmente, possuem mais de 2.000 marcas, desde as famosas marcas globais até aquelas favoritas dos consumidores brasileiros. Estão presentes em 191 países ao redor do mundo. Ficou com água na boca? Então não perca tempo e compre aqui no Carrefour seu leite condensado Moça.',3.56,19,'1594464969162.jpg',3,1,1),(4,'Kit de Fraldas Pampers XG Confort Sec Super - 174 Unidades','9856478541325','Celulose, Polímero Superabsorvente, Polietileno, Polipropileno, Poliéster, Adesivos, Elásticos, Fragrância, Petrolato, Álcool Estearílico e Extrato de Aloe Barbadensis.  ',13.45,24,'1594464937603.jpg',4,1,1),(5,'Milho Verde em Conserva Quero Lata 200g','4789852145652',' Milho verde e salmoura (água e sal) e estabilizante cloreto de cálcio. ',4.56,18,'1594465083450.jpg',5,1,1),(6,'Tomate Carmem Kg','1024578458986','Tomate Carmem, ideal para o preparo de saladas. Não é o recomendado para molhos. ',6.78,32,'1594465458611.jpg',6,1,1),(7,'Limão Tahiti','7458987854111','Limão Tahiti, ideal para uma limonada ou caipirinha. ',3.45,23,'1594464993994.jpg',6,1,1),(8,'Mamão Papaia Xilom','01254587456598','This is a papaya :-)',4.56,29,'1594465024279.jpg',6,1,1),(9,'Abacate ','8745898562555','A fruta pode ser utilizada tanto em receitas doces, como vitamina, quanto salgadas, como o guacamole. ',6.70,28,'1594464627641.jpg',6,1,1),(10,'Sorvete de Chocolate e Creme Cremosíssimo Kibon 2 Litros','1458798523666','Kibon Cremosíssimo Napolitano Especial é a combinação deliciosa dos sabores Flocos, Creme e Chocolate. Um mais gostoso que o outro. Para todos os gostos! Cremosíssimo Napolitano Especial é feito com leite e não possui gorduras trans. Há mais de 70 anos a Kibon é sinônimo de sorvete no Brasil. Ela se tornou uma das marcas queridas do Brasil, com uma família enorme de sorvetes que se tornaram clássicos para crianças e adultos. Marcas como chicabon, tablito, frutilly, fruttare e magnum fazem parte desta rica história. Ficou com água na boca? Então compre o sorvete Kibon Cremosíssimo Napolitano Especial aqui no Carrefour!',15.80,25,'1594465247508.jpg',7,1,1),(11,'Torta com Massa de Iogurte Sadia de Frango com Palmito, Milho e Requeijão 500g','1204510021555','A Torta de frango, palmito e milho com requeijão Sadia leva à mesa uma delícia da culinária, com praticidade e rapidez. Além do saboroso palmito, contém requeijão e massa com iogurte. As Tortas Sadia vão dar um up no seu dia! São muito práticas, rápidas e saborosas. É só esquentar e atacar para não sobrar nada. Sem gorduras trans, elas possui 30% menos sódio. São congeladas logo após o preparo, o que mantém todo o seu sabor original. Presente em mais de 150 mil pontos de venda no Brasil, a Sadia oferece mais de 300 tipos de produtos que vão desde os derivados de carnes suína até as mais deliciosas sobremesas. Aproveite e compre aqui no Carrefour as Tortas Sadia!',10.89,28,'1594465528180.jpg',8,1,1),(12,'Yakissoba Misto Sadia 600g','7457898565111','Você aprecia comida chinesa? Então, vai amar degustar o Yakissoba Misto, da Sadia. Esse produto serve até 2 pessoas e possui 600g. É fabricado com carne bovina e de frango, espaguete e diversos legumes, entre eles, brócolis, cenoura e couve-flor. Possui sabor suave, aroma delicado e é fácil de preparar, já que basta levar sua embalagem ao micro-ondas e, em poucos minutos, está pronto para ser consumido.',18.69,27,'1594465653088.jpg',8,1,1),(13,'Pizza de Lombo Sadia 460g','1203344021555','Cansou de chegar em casa na sexta-feira e comer sempre as mesas comidas na sexta-feira à noite? Uma ótima sugestão para variar o cardápio e deixar o seu jantar mais saboroso é com a prática Pizza de Lombo Sadia 460g, da BRF S.A. O produto tem como destaque a sua fórmula feita com farinha de trigo enriquecida com ferro, molho, mussarela e catupiry, o que garante um sabor único a cada fatia.',14.99,22,'1594465109866.jpg',8,1,1),(14,'Achocolatado em Pó Chocolate Nescau 3.0 380g','4541541112555','Você não sai de casa, todos os dias, sem tomar chocolate quente? Então, o Achocolatado em Pó Chocolate 3.0, da Nescau, não pode faltar na sua casa. Esse produto foi desenvolvido em embalagem de 380g. Possui apresentação em pó, tem sabor chocolate, é fonte de ferro, cálcio e vitaminas, é fácil de preparar, basta ser inserido em leite quente ou gelado, e também pode ser usado para fazer cobertura ou recheio de bolos.',5.99,26,'1594464648935.jpg',1,1,1),(15,'Bebida Láctea Instantânea Toddynho 200ml - 3 Unidades','8956321015444','Além de gostoso e cremoso, Toddynho Chocolate tem a nutrição do leite e vitaminas importantes para o crescimento e desenvolvimento da criançada. Ou seja, uma ótima opção de lanche: prático, saudável e já vem pronto para beber. Compre o kit com três unidades aqui no Carrefour e tenha sempre o sabor de infância feliz na lancheira do seu filho!',5.97,23,'1594464786177.jpg',10,1,1),(16,'Biscoito Cacau e Cereais Nesfit 200g','8974521002111','Os biscoitos Nesfit Cacau e Cereais são uma saborosa opção para os lanches balanceados entre as principais refeições. Além do delicioso sabor do cacau, eles são feitos com quatro cereais integrais (farinha de trigo integral, farinha de centeio integral, farinha de cevada integral e farinha de aveia integral). Além disso, são fonte de fibras e não possuem gorduras trans. Muito gostoso e nutritivo! Nesfit é uma linha de produtos da Nestlé para qualquer momento do dia com sabores deliciosos e Cereais Integrais como Ingrediente nº 1. Sabor e bem estar em perfeito equilíbrio. Aproveite e compre o seu aqui no Carrefour!',3.19,28,'1594464815277.jpg',12,1,1),(17,'Biscoito Original Club Social 288g','9652123587444','Club Social é o biscoito salgado ideal para tirar aquela fominha do caminho que aparece durante o dia. Perfeito para você levar e consumir a qualquer hora e em qualquer lugar. Uma delícia para comer puro ou acompanhado com manteiga, requeijão, geleias, entre outros. Crocante, prático e irresistível! A Mondelez é uma das maiores empresas de snacks do mundo. Seu portfólio apresenta marcas que oferecem qualidade, conveniência e criam deliciosos momentos de alegria para os consumidores do mundo inteiro, como Bis, Amandita, Bubaloo, Club Social, Toblerone, Trident, entre outras. Aproveite e compre Club Social sabor Original aqui no Carrefour. Uma delícia a qualquer hora e qualquer lugar!',5.99,23,'1594464840748.jpg',11,1,1),(18,'Biscoito Recheado Chocolate Bono 140g','8974512325444','Bono é o biscoito cheio de recheio. Crocante, saboroso e com um recheio cremoso de dar água na boca! Perfeito para a hora do lanche da criançada (e dos adultos também). Bono faz parte do portfólio da Nestlé desde 1967, quando a empresa comprou a fábrica Biscoitos São Luiz. A Nestlé é a maior empresa mundial de alimentos e bebidas. Atualmente, possuem mais de 2.000 marcas, desde as famosas marcas globais até aquelas favoritas dos consumidores brasileiros. Estão presentes em 191 países ao redor do mundo. Curtiu? Então compre aqui no Carrefour o biscoito Bono recheio sabor Chocolate, uma delícia!',1.99,22,'1594464889929.jpg',11,1,1),(19,'Biscoito Recheado Baunilha Negresco 140g','9658978452111','Negresco é preto no branco! A melhor combinação de biscoito de chocolate com recheio de baunilha. Um clássico irresistível. Perfeito para a hora do lanche das crianças (e dos adultos também). Com um copo de leite fica ainda mais gostoso! Negresco pertence ao portfólio da Nestlé desde 1967, quando a empresa comprou a fábrica Biscoitos São Luiz. A Nestlé é a maior empresa mundial de alimentos e bebidas. Atualmente, possuem mais de 2.000 marcas, desde as famosas marcas globais até aquelas favoritas dos consumidores brasileiros. Estão presentes em 191 países ao redor do mundo. Curtiu? Então compre aqui no Carrefour o biscoito Negresco, uma delícia!',1.99,25,'1594464870625.jpg',11,1,1),(20,'Suco de Laranja Integral Refrigerado Natural One 100% Suco 900ml','0147852369852','Natural One 100% Suco da linha refrigerada é saudável, nutritivo, sem aromatizantes e sem adição de conservantes ou açúcares. Só falta uma coisa: um lugarzinho aí na sua geladeira. O sabor Laranja é feito com frutas frescas, suco integral e cheio de vitamina C. Tão gostoso que só de falar, já dá vontade de tomar! A Natural One é brasileira e nasceu da vontade de oferecer um produto diferente de tudo o que você já experimentou. Hoje, pessoas do mundo todo já aproveitam os benefícios do suco da tampinha verde que você tom aaí na sua casa. Aproveite e compre o seu Natural One 100% Suco de Laranja aqui no Carrefour!',8.99,26,'1594465279939.jpg',12,1,1),(21,'Pão de Forma Multigrãos Castanha-do-Pará e Quinoa Wickbold 500g','8987445521222','O Pão de Forma Grão Sabor Castanha do Pará e Quinoa da Wickbold foi feito especialmente para pessoas que buscam uma alimentação equilibrada, mas que não abrem mão do sabor. Esses dois ingredientes nobres, além de gostosos, fornecem gorduras boas: ômega 3 e ômega 6, que são muito importantes para o funcionamento do nosso organismo. Além disso, ele é livre de colesterol e sem gorduras trans. O Pão de Forma Wickbold conta com processo de fabricação é 100% assegurado de qualquer contaminação e com o mais rigoroso padrão de qualidade. Muito bom, hein? Aproveite e compre o Pão de Forma Grão Sabor Castanha do Pará e Quinoa da Wickbold aqui no Carrefour.',10.49,29,'1594465179042.jpg',12,1,1),(22,'Wrap Integral Pullman 330g','1204587456222','Farinha de trigo integral, farinha de trigo fortificada com ferro e ácido fólico, gordura vegetal, glúten, fibra de trigo, vinagre, cloreto de potássio, sal, amido de milho, emulsificante mono-diglicerídeos de ácidos graxos, conservadores: propionato de cálcio e sorbato de potássio, fermentos químicos: bicarbonato de sódio, fosfato de alumínio e sódio e fosfato monocálcico e regulador de acidez: ácido fumárico.  ',6.99,26,'1600766857463.jpg',12,1,1),(23,'Suco Pink Limonade Integral Refrigerado Natural One 100% Suco 900ml','0124589856555','Natural One 100% Suco da linha refrigerada é saudável, nutritivo, sem aromatizantes e sem adição de conservantes ou açúcares. Só falta uma coisa: um lugarzinho aí na sua geladeira. O sabor Pink Lemonade é feito com framboesas, limões frescos e suco de maçã. Tão gostoso que só de falar, já dá vontade de tomar! A Natural One é brasileira e nasceu da vontade de oferecer um produto diferente de tudo o que você já experimentou. Hoje, pessoas do mundo todo já aproveitam os benefícios do suco da tampinha verde que você tom aaí na sua casa. Aproveite e compre o seu aqui no Carrefour!',11.69,28,'1594465399978.jpg',12,1,1),(24,'Torrada Salgada Integral Bauducco 160g','8987458523877',' Farinha de Trigo Enriquecida com Ferro, Ácido Fólico, Farinha de Trigo Integral, Gordura Vegetal, Açúcar, Sal, Extrato de Malte, Açúcar Invertido, Polidextrose, Fécula de Mandioca, Amido, Emulsificantes: Lecitina de Soja (INS 322), Estearoil Lactilato de Sódio (INS 481I), Espessante: Goma Guar (INS 412), Melhorador de Farinha: Ácido Ascórbico (INS 300).  ',4.09,25,'1594465491984.jpg',12,1,1),(25,'Óleo de Soja Liza 900ml','1254874125645','O Liza Soja é um óleo 100% vegetal, cinco vezes extrafiltrado, feito a partir do grão da soja. Por ser óleo de soja, o produto é fonte de Vitamina E e uma ótima opção para quem quer sabor em suas receitas sem descuidar do bem-estar de toda a família, pois os óleos vegetais possuem gorduras que contribuem com uma alimentação saudável, dentro da porção adequada de consumo. Ele não possui gorduras trans e nem glúten. A história da marca Liza começou em 1975, lançando o primeiro óleo de cozinha que não fazia fumaça e nem deixava cheiro. Hoje em dia, além do tradicional óleo, também produz maioneses e molhos para salada. Aproveite a oportunidade e compre seu Óleo de Soja Liza aqui no Carrefour.',3.89,27,'1594465698373.jpg',13,1,1),(26,'Azeite Português Extra Virgem Tradicional Gallo 500ml','0145652135689','O Azeite Extra Virgem Gallo possui uma balanceada combinação de sabores e aromas. Com um perfil equilibrado de frutado, amargo e picante, e moderadas notas de doce, é ideal para adicionar harmonia e confiança na preparação dos pratos mais variados. Ideal para cozinhar e temperar todo o tipo de pratos, para quem escolhe dar uma intensidade de sabor moderada. Experimente este azeite na preparação de sopas, grelhados ou em pratos tradicionais. Fundada em Portugal em 1919 por um visionário chamado Victor Guedes, Gallo é sinônimo da alma e da tradição portuguesas, que se renovam ao longo do tempo. Curtiu? Então compre o seu agora mesmo aqui no Carrefour!',20.39,21,'1594464689645.jpg',13,1,1),(27,'Óleo de Girassol Salada 900ml','9658741232000',' Conserve melhor o seu óleo mantendo-o em local seco, ao abrigo da luz e longe de qualquer fonte de calor.  ',5.79,28,'1594465677331.jpg',13,1,1),(28,' Pão de Forma 12 Grãos Zero Pullman 350g','9785445521666','Apresentação: Fresco  \r\nFarinha Principal: Integral  \r\nQuantidade de Grãos ou Cereais: 12  ',12.50,27,'1594463405607.jpg',1,1,1),(29,' Pão de Forma Integral Pullman 500g','1458789856511','Imagem meramente ilustrativa  Prazo de Validade: Vide Impresso na Embalagem  ',5.67,27,'1594463492015.jpg',12,1,1),(30,' Pão de Forma Integral Nutrella Bom Humor 14 Grãos 450g','1245557778878','O Pão de Forma 14 Grãos da Nutrella é um pão integral com trigo, aveia, centeio, soja, linhaça, cevada, gergelim, arroz, entre outros grãos. Tudo natural, feito apenas com ingredientes que você conhece. Não possui aditivos químicos e nem conservantes artificiais. A história da Nutrella começou a ser contada na década de 1950 com uma pequena padaria em Novo Hamburgo/RS. Hoje comercializa diversas linhas de pães integrais, além de sticks e muffins. A Nutrella é uma das grandes competidoras nacionais do negócio de panificação, com uma postura pioneira, voltada para a qualidade e as necessidades do mercado. Aproveite e compre aqui no Carrefour o Pão de Forma 14 Grãos. Uma ótima opção saborosa e saudável para a sua família!',8.69,31,'1594463449228.jpg',1,1,1),(31,' Suco de uva integral aliança 1,5 litro','7985412252222','Se você está pensando em deixar a sua alimentação e a da família muito mais saudável, mas ainda não sabe por onde começar, uma ótima sugestão é levar à mesa da família o delicioso Suco de uva integral 1,5 litro, da Nova Aliança. Além da embalagem fácil de usar e que não interfere no sabor do líquido, o produto tem como destaque a sua fórmula com suco da fruta, o que garante um sabor único.',6.70,29,'1594463534861.jpg',1,1,1),(32,'Suco de Maçã Integral Refrigerado Natural One 100% Suco 900ml','1326598547888','Natural One é 100% suco. Feito com maçãs Galas e Fuji em um suco integral e com muito sabor. Saudável, nutritivo, sem aromatizantes e sem adição de conservantes ou açúcares. Só falta uma coisa: um lugarzinho aí na sua geladeira. A Natural One é brasileira e nasceu da vontade de oferecer um produtodiferente de tudo o que você já experimentou. Foram anos trabalhando com parceirosde tecnologia da Alemanha, EUA, França,Holanda, Japão e Suécia para fazerum suco de verdade, 100% naturale que preserva ao máximo o saborde cada ingrediente, porque é produzidoa partir de frutas e vegetais frescos. Muito bom, não é mesmo? Então aproveite a oportunidade e compre o seu aqui no Carrefour!',8.99,27,'1594465316698.jpg',1,1,1),(33,' Água Mineral com Gás Crystal VIP Garrafa 350ml','1025458987400','Tomar água ocasiona vários benefícios para o organismo. Então, jamais deixe de tomar de 1 a 2 litros de água por dia para manter-se saudável. A Água Mineral com Gás VIP, da Crystal, é um ótimo produto, já que é leve, refrescante e ainda possui gás, que auxilia na digestão. Esse produto traz mais vitalidade e ajuda na hidratação do seu corpo. Contém sais minerais e é obtida diretamente de fontes naturais.',2.09,29,'1594464600987.jpg',1,1,1),(34,'Kit de Fraldas Huggies Hiper Supreme Care G - 192 Unidades','9856541112000','A Fralda Huggies Supreme Care foi projetada para se ajustar melhor ao corpo do seu bebê, com quatro pontos de ajuste que ajudam a se manter durante horas como se estivesse recém-colocada na criança. A cintura elástica previne vazamentos pelas costas do bebê.',179.90,27,'1594464913873.jpg',4,1,1),(35,'Batata Doce Fresca Carrefour Viver 600g','4125456588999','A batata doce possui um sabor levemente adocicado, o que a torna uma ótima opção para receitas doces e salgadas. Porém, sua principal característica diz repeito à saúde. Cerca de 100 gramas do alimento cozido contêm aproximadamente 77 calorias e 18,4 g de carboidratos. Ela é rica em fibras alimentares e proteínas. Além disso, a batata doce apresenta vitaminas A, E, C e K e do complexo B. Em sua composição também se encontram sais minerais como zinco, cálcio, magnésio, ferro, manganês e potássio. E tem mais. Por ser uma fonte de carboidratos, consumir batata-doce ajuda no ganho de massa muscular. Incrível, não é mesmo? Então compre aqui no Carrefour a batata doce orgânica e tenha uma vida mais saudável!',4.89,27,'1594464715262.jpg',14,1,1),(36,'Supra Soy','7893500011286','SUPRA SOY SEM LACTOSE ORIGINAL: Produto a base de proteína isolada de soja para dietas com restrição a lactose e lactase.',19.80,28,'1594465423828.webp',12,1,1),(37,'Test','9988774554111','At vero eos et accusam et justo duo dolores et ea rebum. ',10.00,5,'1596453451603.png',14,1,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('B4g3wb2xGM0UWWhvPP1xyjCzCxhun_8j',1600780785,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"message\":null,\"user\":{\"id\":22,\"name\":\"Marcos Pereira \",\"cpf\":\"12345678920\",\"email\":\"marcos.pereira@email.com\",\"phone\":\"85999473839\",\"pwd\":\"123\",\"type\":2,\"imageName\":\"1600522433135.png\",\"imageLogo\":\"default-logo.svg\",\"street\":\"null\",\"_number\":\"null\",\"neighborhood\":0,\"complement\":\"null\"}}'),('HCVCFIjtbp0gkzSn-eZ93nAC_1dYofUw',1600857707,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('Hm892kH0DyGgEaGlHOSX13C95P9IPpDz',1600852772,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('PqhnInBCMGsNLM4CljsncLajosUnNV78',1600852973,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('RmlJzBROAqcQ1iJs9nm8XeLsS1VsMWDV',1600775859,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"message\":null,\"user\":{\"id\":1,\"name\":\"admin\",\"cpf\":null,\"email\":\"admin@email.com\",\"phone\":\"(85)999473839\",\"pwd\":\"453231@Ad\",\"type\":1,\"imageName\":\"1596621155875.png\",\"imageLogo\":\"default-logo.svg\",\"street\":\"null\",\"_number\":\"null\",\"neighborhood\":0,\"complement\":\"null\"}}'),('VE-8MhFWb2A56v89MHu0jdUg__lComwG',1600774293,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"message\":null}'),('qAv6ROcN4j2z7Sxw94mKCJxjDgaSIatk',1600859867,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('vifQUiBNT7XcYDob2-8O0OEGxPAQjRsk',1600860210,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"message\":null,\"user\":{\"id\":22,\"name\":\"Marcos Pereira \",\"cpf\":\"12345678920\",\"email\":\"marcos.pereira@email.com\",\"phone\":\"85999473839\",\"pwd\":\"123\",\"type\":2,\"imageName\":\"1600522433135.png\",\"imageLogo\":\"default-logo.svg\",\"street\":\"null\",\"_number\":\"null\",\"neighborhood\":0,\"complement\":\"null\"}}'),('yc0S4Ne6akBTAXvCPDFQoNw0pmXBRAJ-',1600782123,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"message\":null}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `cpf` varchar(30) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `pwd` varchar(100) NOT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `imageName` varchar(100) DEFAULT NULL,
  `imageLogo` varchar(100) DEFAULT 'default-logo.svg',
  `street` varchar(150) DEFAULT NULL,
  `_number` varchar(10) DEFAULT NULL,
  `neighborhood` int DEFAULT NULL,
  `complement` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin',NULL,'admin@email.com','(85)999473839','453231@Ad',1,'1596621155875.png','default-logo.svg','null','null',0,'null'),(2,'Jully Watson',NULL,'jul@email.com','(85)986844184','453231',0,'1600099183558.jpg','default-logo.svg','Rua Filomena Sucupira ','251',3,'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),(3,'Raquel Selton',NULL,'raq@email.com','(85)788667755','raq123',0,'1600099288228.jpeg','default-logo.svg','Avenida Alameda Esperança','115',4,'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),(4,'Alessandra Alves',NULL,'ale@email.com','(85)988778866','ale123',0,'1600099375316.jpeg','default-logo.svg','Avenida 23','265',2,''),(5,'Emma Stwart',NULL,'emm@email.com','(85)944558866','emm123',0,'1596624783443.jpg','default-logo.svg','Rua Abelardo Jovino','120',3,'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),(6,'Elena Prado',NULL,'ele@email.com','(85)944557788','ele123',0,'1596625360202.jpg','default-logo.svg','Avenida Alameda Esperança','1154',5,'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),(7,'Carolina Alves',NULL,'car@email.com','(85)965231477','car123',0,'1596625856257.jpg','default-logo.svg','Rua alfredo Albuquerque','556',4,'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),(8,'Rejane morais',NULL,'rej@email.com','(85)977884455','rej123',0,NULL,'default-logo.svg','Rua Pena Caiada','4415',1,''),(22,'Marcos Pereira ','12345678920','marcos.pereira@email.com','85999473839','123',2,'1600522433135.png','default-logo.svg','null','null',0,'null'),(23,'Sandra Peixoto ','78955444510','sandra.peixoto@email.com','85999473839','123',2,'1600255257762.jpeg','default-logo.svg','null','null',0,'null'),(25,'Roseno Soares','7888877760','ros@email.com','85999473839','123',2,NULL,'default-logo.svg',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-22  8:29:54
