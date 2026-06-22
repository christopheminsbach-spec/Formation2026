	CREATE DATABASE IF NOT EXISTS Formation_RIL_Ex;
    
    USE Formation_RIL_Ex;

	CREATE TABLE Employee (
		emp_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
		emp_firstname VARCHAR(10), 
		emp_lastname VARCHAR(10), 
		emp_job VARCHAR(9), 
		emp_hire_date DATETIME(3), 
		emp_salary NUMERIC(7, 2), 
		emp_commission NUMERIC(7, 2) NULL, 
		dep_id INT
	) Engine=InnoDB;

	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('JOHN', 'LAM', 'ADMIN', '1990-12-17', 18000, NULL, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('HENRY', 'LAM', 'MANAGER', '1998-02-02', 52000, 300, 3);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('NICOLAS', 'CLEMENT', 'SALES I', '1996-01-02', 25000, 500, 3);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('BENJAMIN', 'LULLIER', 'SALES I', '1990-04-02', 27000, NULL, 3);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('NGUYEN', 'LAM', 'TECH', '1994-06-23', 22500, 1400, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('DOMINIQUE', 'CLEMENT', 'MANAGER', '1993-05-01', 54000, NULL, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('ELISE', 'PARISOT', 'TECH', '1997-09-22', 25000, NULL, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('SEBASTIEN', 'JEAN', 'ENGINEER', '1997-03-30', 32000, NULL, 2);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('JACKY', 'CLEMENT', 'CEO', '1990-01-01', 75000, NULL, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('FLORIAN', 'VERLE', 'MANAGER', '1994-08-09', 56000, NULL, 2);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('QUENTIN', 'VERLE', 'ENGINEER', '1996-03-15', 34000, NULL, 2);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('BERTRAND',  'CLEMENT', 'ADMIN', '1998-04-16', 18000, NULL, 4);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('ARTHUR', 'PARISOT', 'ENGINEER', '2000-12-03', 30000, NULL, 2);
	INSERT INTO Employee (emp_firstname, emp_lastname, emp_job, emp_hire_date, emp_salary, emp_commission, dep_id) VALUES ('CLEMENT', 'FRINGOTTE', 'CPA', '1995-10-12', 35000, NULL, 1);

	CREATE TABLE Department (
		dep_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
		dep_name VARCHAR(14), 
		dep_location VARCHAR(13)
	) Engine=InnoDB;

	INSERT INTO Department (dep_name, dep_location) VALUES	('ACCOUNTING', 'ST LOUIS'),
									('RESEARCH', 'NEW YORK'),
									('SALES', 'ATLANTA'),
									('OPERATIONS', 'SEATTLE');



	ALTER TABLE Employee
			ADD CONSTRAINT FK_Employee_Department FOREIGN KEY (dep_id) 
			REFERENCES Department (dep_id);

""
-- 1. Requête d'insertion avec jointure: Ajoutez un nouvel employé associé à la location SEATTLE (à faire proprement, mais les données insérées peuvent être des données de test)
-- 2. Requête de mise à jour avec jointure : Ajoutez un nouveau Department ('RESEARCH', 'JERSEY')  + Modifiez toutes les personnes associées à NEW YORK pour les affecter à 'JERSEY'
-- 3. Requête de suppression avec jointure : Supprimez uniquement les employés de dont le 'lastname' est 'VERLE' qui sont associés au département 'JERSEY'.
""

