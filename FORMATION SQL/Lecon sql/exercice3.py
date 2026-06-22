-- 1. Récupérez toutes les données de la table Employees.
SELECT * 
FROM employee;
-- 	2. Récupérez le nom et prénom de tous les employés dans un seul champ.
SELECT CONCAT(lastname, ' ', firstname) AS fullname
FROM employee;
-- 	3. Affichez les employés dont le salaire est supérieur à 20 000.
SELECT *
FROM employee
WHERE salary > 20000;
-- 	4. Affichez les employés dont le salaire est compris entre 20 000 et 40 000.
SELECT *
FROM employee
WHERE salary > 20000 AND salary < 40000;

SELECT *
FROM employee
WHERE salary BETWEEN 20000 AND 40000;
-- 	5. Affichez tous les employés dont le salaire est supérieur à 20 000 et dont le dep_id est égal à 3.
SELECT *
FROM employee
WHERE salary > 20000
	AND id_department = 3;
-- 	6. Utilisez la requête faite à l'étape 5, puis triez les résultats par ordre décroissant de salaire.
SELECT *
FROM employee
WHERE salary > 20000
	AND id_department = 3
ORDER BY salary DESC;
-- 	7. Utilisez la requête faite à l'étape 5 mais Récupérez uniquement les 2 premiers résultats, puis faire de même avec la requête de l'étape 6.
-- Je récupère les premiers employés qui ont un salaire supérieur à 20000 dans le départment avec l'id 3.
SELECT *
FROM employee
WHERE salary > 20000
	AND id_department = 3
LIMIT 0,2;

SELECT *
FROM employee
WHERE salary > 20000
	AND id_department = 3
ORDER BY salary DESC
LIMIT 0,2;
-- Je récupère les deux employés les mieux payés dont le salaire est supérieur à 20000 appartenant au departement avec l'id 3.

-- 	8. Récupérez les résultats de l'étape 2 en vous assurant qu'il n'y aura pas de doublons dans les noms (pas deux fois la même ligne). Deux choix possibles, justifiez votre choix.
-- Il récupère d'abord TOUT les employés puis il parcourt la liste des employés un à un pour en supprimer les doublons.
SELECT DISTINCT lastname
FROM employee;

-- On récupère les employés et on fusionne directement dans une seule requête (sans reparcourir quoi que ce soit) les employés ayant le même nom.
SELECT lastname
FROM employee
GROUP BY lastname;

-- 	9. Récupérez toutes les données de la table "Department", les champs dans le résultat devront être nommés respectivement "Id", "Nom", "Emplacement".
SELECT id as Id, name AS Nom, location AS Emplacement
FROM department;
-- 	10. Récupérez les employés embauchés entre le 01/01/1994 et 01/01/1999.
SELECT *
FROM employee
WHERE hire_date BETWEEN '1994-01-01' AND '1999-01-01';
-- 	11. Récupérez tous les employés dont le nom contient la lettre "N",
SELECT *
FROM employee
WHERE lastname LIKE '%N%';
-- 	12. Affichez toutes les données des employés n'ayant pas de commission.
SELECT *
FROM employee
WHERE commission IS NULL;
-- 	13. Récupérez la somme des salaires des employés par famille. (Demander indice au formateur si nécessaire)
SELECT lastname, SUM(salary)
FROM employee
GROUP BY lastname;
-- 	14. Reprenez la requête de l'étape 13 mais n'affichez que les résultats dont la somme est supérieure à 80 000.
SELECT lastname, SUM(salary) AS sumSalary
FROM employee
-- WHERE qqch... Ici ça filtre AVANT regroupement.
GROUP BY lastname
HAVING sumSalary > 80000;