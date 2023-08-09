#include <stdio.h>

/**
 * check_cycle - checks if a singly linked list has a cycle in it
 *
 * @list: pointer to head of list
 * Return: 0 if list has a cycle. Otherwise 1
*/

int check_cycle(listint_t *list)
{
	if (list == NULL)
		return (0);

	listint_t *current = list;
	listint_t *temp;

	while (current != NULL)
	{
		if (current->next == list)
			return (1);

		temp = current->next;
		current->next = list;
		current = temp;
	}

	return (0);
}
