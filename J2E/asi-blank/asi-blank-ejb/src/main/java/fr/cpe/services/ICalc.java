package fr.cpe.services;

import java.util.List;

import javax.ejb.Local;

@Local
public interface ICalc {
	
	Integer add(List<Integer> numbers);
}
