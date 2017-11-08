package fr.cpe.services;

import javax.ejb.Local;

@Local
public interface IHelloAsync {

	void hello();
}
