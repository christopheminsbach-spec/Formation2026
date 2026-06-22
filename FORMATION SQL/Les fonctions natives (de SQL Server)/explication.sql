Fonctions SQL avec exemples sur la base Employee
CONCAT()
Concatène plusieurs chaînes.
Exemple :
SELECT CONCAT(emp_firstname, ' ', emp_lastname) AS NomComplet FROM Employee;
NomComplet
John Lam
Henry Lam
Nicolas Clement
Elise Parisot
Arthur Parisot

COUNT()
Compte les employés.
Exemple :
SELECT COUNT(*) AS NombreEmployes FROM Employee;
NombreEmployes
5

AVG()
Salaire moyen des employés.
Exemple :
SELECT AVG(emp_salary) AS SalaireMoyen FROM Employee;
SalaireMoyen
30000.000000

SUM()
Masse salariale totale.
Exemple :
SELECT SUM(emp_salary) AS MasseSalariale FROM Employee;
MasseSalariale
150000.00
MIN() / MAX()
Salaire minimum et maximum.
Exemple :
SELECT MIN(emp_salary) AS SalaireMin, MAX(emp_salary) AS SalaireMax FROM Employee;
SalaireMin
SalaireMax
18000.00
52000.00
GETDATE() / CURRENT_DATE()
Date actuelle et ancienneté.
Exemple :
SELECT emp_firstname, CURRENT_DATE() AS DateDuJour FROM Employee;
	
Éditer Éditer
Copier Copier
Supprimer Supprimer
John
2026-06-05

Éditer Éditer
Copier Copier
Supprimer Supprimer
Henry
2026-06-05

Éditer Éditer
Copier Copier
Supprimer Supprimer
Nicolas
2026-06-05

Éditer Éditer
Copier Copier
Supprimer Supprimer
Elise
2026-06-05

Éditer Éditer
Copier Copier
Supprimer Supprimer
Arthur
2026-06-05
DATEDIFF()
Nombre de jours depuis l'embauche.
Exemple :
SELECT emp_firstname, DATEDIFF(CURRENT_DATE(), emp_hire_date) AS JoursEntreprise FROM Employee;
ISDATE()
Vérifie si une chaîne est une date valide (SQL Server).
Exemple :
SELECT ISDATE('1998-02-02');
TRIM()
Supprime les espaces inutiles.
Exemple :
SELECT TRIM('   JOHN   ') AS Resultat;
COALESCE()
Remplace les commissions NULL par 0.
Exemple :
SELECT emp_firstname, COALESCE(emp_commission, 0) AS Commission FROM Employee;
CONVERT()
Convertit une date en texte (SQL Server).
Exemple :
SELECT CONVERT(VARCHAR, emp_hire_date, 103) AS DateFrancaise FROM Employee;
