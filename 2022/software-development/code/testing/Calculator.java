package demo;

public class Calculator {
	int sum = 0;
	int count = 0;
	public void add(int n) {
		sum += n;
		count++;
	}
	public int getTotal() {
		return sum;
	}
	public int getAverage() {
		return sum / count;
	}
}
