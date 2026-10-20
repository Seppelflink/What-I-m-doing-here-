Reliable webhook delivery.
One pull request per task

+ def retry_failed_deliveries(event): 
	+ for attempt in range(5): 
		+ if send (event):
			+ return True
		+ wait(2 ** attempt)
	+ return False
+ 